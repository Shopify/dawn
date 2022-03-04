"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

var _loaderUtils = require("loader-utils");

var _schemaUtils = require("schema-utils");

var _plugins = require("./plugins");

var _utils = require("./utils");

var _options = _interopRequireDefault(require("./options.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function loader(content) {
  const rawOptions = (0, _loaderUtils.getOptions)(this);
  (0, _schemaUtils.validate)(_options.default, rawOptions, {
    name: 'HTML Loader',
    baseDataPath: 'options'
  });
  const options = (0, _utils.normalizeOptions)(rawOptions, this);

  if (options.preprocessor) {
    // eslint-disable-next-line no-param-reassign
    content = await options.preprocessor(content, this);
  }

  const plugins = [];
  const errors = [];
  const imports = [];
  const replacements = [];

  if (options.attributes) {
    plugins.push((0, _plugins.sourcePlugin)({
      urlHandler: url => (0, _loaderUtils.stringifyRequest)(this, url),
      attributes: options.attributes,
      resourcePath: this.resourcePath,
      imports,
      errors,
      replacements
    }));
  }

  if (options.minimize) {
    plugins.push((0, _plugins.minimizerPlugin)({
      minimize: options.minimize,
      errors
    }));
  }

  const {
    html
  } = (0, _utils.pluginRunner)(plugins).process(content);

  for (const error of errors) {
    this.emitError(error instanceof Error ? error : new Error(error));
  }

  const importCode = (0, _utils.getImportCode)(html, this, imports, options);
  const moduleCode = (0, _utils.getModuleCode)(html, replacements, options);
  const exportCode = (0, _utils.getExportCode)(html, options);
  return `${importCode}${moduleCode}${exportCode}`;
}