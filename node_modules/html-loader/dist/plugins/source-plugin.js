"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _htmlparser = require("htmlparser2");

var _loaderUtils = require("loader-utils");

var _HtmlSourceError = _interopRequireDefault(require("../HtmlSourceError"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = options => function process(html) {
  const {
    list,
    urlFilter: maybeUrlFilter,
    root
  } = options.attributes;
  const sources = [];
  const urlFilter = (0, _utils.getFilter)(maybeUrlFilter, value => (0, _loaderUtils.isUrlRequest)(value, root));

  const getAttribute = (tag, attribute, attributes, resourcePath) => {
    return list.find(element => {
      const foundTag = typeof element.tag === 'undefined' || typeof element.tag !== 'undefined' && element.tag.toLowerCase() === tag.toLowerCase();
      const foundAttribute = element.attribute.toLowerCase() === attribute.toLowerCase();
      const isNotFiltered = element.filter ? element.filter(tag, attribute, attributes, resourcePath) : true;
      return foundTag && foundAttribute && isNotFiltered;
    });
  };

  const {
    resourcePath
  } = options;
  const parser = new _htmlparser.Parser({
    attributesMeta: {},

    onattribute(name, value) {
      // eslint-disable-next-line no-underscore-dangle
      const endIndex = parser._tokenizer._index;
      const startIndex = endIndex - value.length;
      const unquoted = html[endIndex] !== '"' && html[endIndex] !== "'";
      this.attributesMeta[name] = {
        startIndex,
        unquoted
      };
    },

    onopentag(tag, attributes) {
      Object.keys(attributes).forEach(attribute => {
        const value = attributes[attribute];
        const {
          startIndex: valueStartIndex,
          unquoted
        } = this.attributesMeta[attribute];
        const foundAttribute = getAttribute(tag, attribute, attributes, resourcePath);

        if (!foundAttribute) {
          return;
        }

        const {
          type
        } = foundAttribute; // eslint-disable-next-line default-case

        switch (type) {
          case 'src':
            {
              let source;

              try {
                source = (0, _utils.parseSrc)(value);
              } catch (error) {
                options.errors.push(new _HtmlSourceError.default(`Bad value for attribute "${attribute}" on element "${tag}": ${error.message}`, parser.startIndex, parser.endIndex, html));
                return;
              }

              if (!(0, _utils.isUrlRequestable)(source.value, root)) {
                return;
              }

              const startIndex = valueStartIndex + source.startIndex;
              const endIndex = startIndex + source.value.length;
              sources.push({
                name: attribute,
                value: source.value,
                unquoted,
                startIndex,
                endIndex
              });
              break;
            }

          case 'srcset':
            {
              let sourceSet;

              try {
                sourceSet = (0, _utils.parseSrcset)(value);
              } catch (error) {
                options.errors.push(new _HtmlSourceError.default(`Bad value for attribute "${attribute}" on element "${tag}": ${error.message}`, parser.startIndex, parser.endIndex, html));
                return;
              }

              sourceSet.forEach(sourceItem => {
                const {
                  source
                } = sourceItem;
                const startIndex = valueStartIndex + source.startIndex;
                const endIndex = startIndex + source.value.length;

                if (!(0, _utils.isUrlRequestable)(source.value, root)) {
                  return;
                }

                sources.push({
                  name: attribute,
                  value: source.value,
                  unquoted,
                  startIndex,
                  endIndex
                });
              });
              break;
            }
          // Need improve
          // case 'include': {
          //   let source;
          //
          //   // eslint-disable-next-line no-underscore-dangle
          //   if (parser._tokenizer._state === 4) {
          //     return;
          //   }
          //
          //   try {
          //     source = parseSrc(value);
          //   } catch (error) {
          //     options.errors.push(
          //       new HtmlSourceError(
          //         `Bad value for attribute "${attribute}" on element "${tag}": ${error.message}`,
          //         parser.startIndex,
          //         parser.endIndex,
          //         html
          //       )
          //     );
          //
          //     return;
          //   }
          //
          //   if (!urlFilter(attribute, source.value, resourcePath)) {
          //     return;
          //   }
          //
          //   const { startIndex } = parser;
          //   const closingTag = html
          //     .slice(startIndex - 1)
          //     .match(
          //       new RegExp(`<s*${tag}[^>]*>(?:.*?)</${tag}[^<>]*>`, 's')
          //     );
          //
          //   if (!closingTag) {
          //     return;
          //   }
          //
          //   const endIndex = startIndex + closingTag[0].length;
          //   const importItem = getImportItem(source.value);
          //   const replacementItem = getReplacementItem(importItem);
          //
          //   sources.push({ replacementItem, startIndex, endIndex });
          //
          //   break;
          // }
        }
      });
      this.attributesMeta = {};
    },

    onerror(error) {
      options.errors.push(error);
    }

  }, {
    decodeEntities: false,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    recognizeCDATA: true,
    recognizeSelfClosing: true
  });
  parser.write(html);
  parser.end();
  const imports = new Map();
  const replacements = new Map();
  let offset = 0;

  for (const source of sources) {
    const {
      name,
      value,
      unquoted,
      startIndex,
      endIndex
    } = source;
    let normalizedUrl = value;
    let prefix = '';
    const queryParts = normalizedUrl.split('!');

    if (queryParts.length > 1) {
      normalizedUrl = queryParts.pop();
      prefix = queryParts.join('!');
    }

    normalizedUrl = (0, _utils.normalizeUrl)(normalizedUrl);

    if (!urlFilter(name, value, resourcePath)) {
      // eslint-disable-next-line no-continue
      continue;
    }

    let hash;
    const indexHash = normalizedUrl.lastIndexOf('#');

    if (indexHash >= 0) {
      hash = normalizedUrl.substr(indexHash, indexHash);
      normalizedUrl = normalizedUrl.substr(0, indexHash);
    }

    const request = (0, _utils.requestify)(normalizedUrl, root);
    const newUrl = prefix ? `${prefix}!${request}` : request;
    const importKey = newUrl;
    let importName = imports.get(importKey);

    if (!importName) {
      importName = `___HTML_LOADER_IMPORT_${imports.size}___`;
      imports.set(importKey, importName);
      options.imports.push({
        importName,
        source: options.urlHandler(newUrl)
      });
    }

    const replacementKey = JSON.stringify({
      newUrl,
      unquoted,
      hash
    });
    let replacementName = replacements.get(replacementKey);

    if (!replacementName) {
      replacementName = `___HTML_LOADER_REPLACEMENT_${replacements.size}___`;
      replacements.set(replacementKey, replacementName);
      options.replacements.push({
        replacementName,
        importName,
        hash,
        unquoted
      });
    } // eslint-disable-next-line no-param-reassign


    html = html.slice(0, startIndex + offset) + replacementName + html.slice(endIndex + offset);
    offset += startIndex + replacementName.length - endIndex;
  }

  return html;
};

exports.default = _default;