"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveScript = exports.canInlineTemplate = void 0;
const util_1 = require("./util");
const compiler_1 = require("./compiler");
const clientCache = new WeakMap();
const serverCache = new WeakMap();
/**
 * inline template mode can only be enabled if:
 * - is production (separate compilation needed for HMR during dev)
 * - template has no pre-processor (separate loader chain required)
 * - template is not using src
 */
function canInlineTemplate(descriptor, isProd) {
    const templateLang = descriptor.template && descriptor.template.lang;
    const templateSrc = descriptor.template && descriptor.template.src;
    return isProd && !!descriptor.scriptSetup && !templateLang && !templateSrc;
}
exports.canInlineTemplate = canInlineTemplate;
function resolveScript(descriptor, scopeId, options, loaderContext) {
    var _a;
    if (!descriptor.script && !descriptor.scriptSetup) {
        return null;
    }
    const isProd = loaderContext.mode === 'production' || process.env.NODE_ENV === 'production';
    const isServer = (_a = options.isServerBuild) !== null && _a !== void 0 ? _a : loaderContext.target === 'node';
    const enableInline = canInlineTemplate(descriptor, isProd);
    const cacheToUse = isServer ? serverCache : clientCache;
    const cached = cacheToUse.get(descriptor);
    if (cached) {
        return cached;
    }
    let resolved = null;
    let templateCompiler;
    if (typeof options.compiler === 'string') {
        templateCompiler = require(options.compiler);
    }
    else {
        templateCompiler = options.compiler;
    }
    if (compiler_1.compiler.compileScript) {
        try {
            resolved = compiler_1.compiler.compileScript(descriptor, {
                id: scopeId,
                isProd,
                inlineTemplate: enableInline,
                refSugar: options.refSugar,
                babelParserPlugins: options.babelParserPlugins,
                templateOptions: {
                    ssr: isServer,
                    compiler: templateCompiler,
                    compilerOptions: Object.assign(Object.assign({}, options.compilerOptions), (0, util_1.resolveTemplateTSOptions)(descriptor, options)),
                    transformAssetUrls: options.transformAssetUrls || true,
                },
            });
        }
        catch (e) {
            loaderContext.emitError(e);
        }
    }
    else if (descriptor.scriptSetup) {
        loaderContext.emitError(`<script setup> is not supported by the installed version of ` +
            `@vue/compiler-sfc - please upgrade.`);
    }
    else {
        resolved = descriptor.script;
    }
    cacheToUse.set(descriptor, resolved);
    return resolved;
}
exports.resolveScript = resolveScript;
