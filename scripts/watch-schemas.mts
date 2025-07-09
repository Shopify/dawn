import { readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import esbuild, { BuildContext } from 'esbuild';
import { evalModule } from 'mlly';
import prettier from 'prettier';

let mode = 'watch';
if (process.argv.includes('--build')) {
  console.log('Building the schemas…');
  mode = 'build';
} else {
  console.log('Watching the schemas/ folder for changes…');
}
const SCHEMA_REGEX = /{%-?\s*schema\s*-?%}([\s\S]*){%-?\s*endschema\s*-?%}/;

const SCHEMA_IMPORT_COMMENT_REGEX = /{%-?\s*# import schema from ('.*'|".*")\s*-?%}/;

function findSchemaImportComment(code: string) {
  return code.match(SCHEMA_IMPORT_COMMENT_REGEX);
}

type FindSchemaImportNoResult = {
  code: null;
  matches: null;
  specifier: null;
  type: null;
};
type FindSchemaImportMatchedResult = {
  code: string;
  matches: RegExpMatchArray;
  specifier: string;
  type: 'import-comment' | 'replaceable';
};
type FindSchemaImportResult = FindSchemaImportNoResult | FindSchemaImportMatchedResult;

function findSchemaImport(content: string): FindSchemaImportResult {
  const matches = findSchemaImportComment(content);

  if (!matches) {
    return {
      code: null,
      matches: null,
      specifier: null,
      type: null,
    };
  }

  const [code, quotedSpecifier] = matches;
  const specifier = ((string) => {
    const quote = string[0];
    return string.replace(new RegExp(`^${quote}|${quote}$`, 'g'), '');
  })(quotedSpecifier);

  return {
    code,
    matches,
    specifier,
    type: 'import-comment',
  };
}

function transformSection(code: string) {
  const schema = '{{{ schema }}}';
  const schemaImport = findSchemaImport(code);

  if (!schemaImport.matches) {
    return code;
  }

  const replacementSchema = ['{% schema %}', schema, '{% endschema %}'].join('\n');

  if (schemaImport.type === 'replaceable') {
    return code.replace(schemaImport.code, replacementSchema);
  }

  const hasExistingSchema = SCHEMA_REGEX.test(code);

  if (hasExistingSchema) {
    return code.replace(SCHEMA_REGEX, replacementSchema);
  }

  return [code, replacementSchema].join('\n');
}

const OUT_DIR = 'dist';

const context = await (mode === 'build' ? esbuild.build : esbuild.context)({
  entryPoints: ['./blocks/*.liquid', './sections/*.liquid'],
  bundle: true,
  format: 'esm',
  write: false,
  outdir: OUT_DIR,
  plugins: [
    {
      name: 'liquid-schemas',
      setup(build) {
        let startup = true;
        const assetCache = new Map<string, string>();

        build.onLoad({ filter: /.*.liquid$/ }, async ({ path }) => {
          const content = await readFile(path, 'utf8');
          const schemaImport = findSchemaImport(content);

          if (!schemaImport.specifier) {
            return {
              contents: `
                export const content = ${JSON.stringify(content)};
                export const path = ${JSON.stringify(path)};
              `,
            };
          }

          const resolvedSchemaImport = await build.resolve(schemaImport.specifier, {
            kind: 'import-statement',
            resolveDir: dirname(path),
          });

          return {
            contents: `
              import schema from ${JSON.stringify(resolvedSchemaImport.path)};

              export const content = ${JSON.stringify(
                transformSection(content)
              )}.replace('{{{ schema }}}', JSON.stringify(schema, null, 2));
              export const path = ${JSON.stringify(path)};
            `,
          };
        });

        build.onEnd(async (result) => {
          const changedFiles = (result.outputFiles ?? []).filter((file) => {
            return mode === 'build' || assetCache.get(file.path) !== file.hash;
          });

          await Promise.allSettled(
            changedFiles.map(async (file) => {
              const evaluatedResult: { content: string; path: string } = await evalModule(file.text);

              assetCache.set(file.path, file.hash);
              if (!startup && mode === 'watch') {
                const relativePath = file.path.replace(process.cwd() + '/', '');
                const relativeOutputPath = evaluatedResult.path.replace(process.cwd() + '/', '');
                console.log(`${relativePath.replace(OUT_DIR, 'schemas')} -> ${relativeOutputPath}`);
              }

              const prettierConfig = await prettier.resolveConfig(evaluatedResult.path);
              const prettified = await prettier.format(evaluatedResult.content, {
                ...prettierConfig,
                plugins: ['@shopify/prettier-plugin-liquid'],
                parser: 'liquid-html',
              });

              writeFile(evaluatedResult.path, prettified, 'utf8');
            })
          ).then((results) => {
            startup = false;

            const failed = results.filter((result) => result.status === 'rejected');
            if (failed.length > 0) {
              console.error('Failed files:\n\n' + failed.map((result) => result.reason).join('\n'));
              return;
            }

            if (mode === 'build') {
              console.log('Build complete.');
            }
          });
        });
      },
    },
  ],
});

if (mode === 'watch') {
  await (context as BuildContext).watch();
}
