'use strict'
var loaderUtils = require('loader-utils')

module.exports = function (content, map, meta) {
  var options = Object.assign({}, loaderUtils.getOptions(this))
  if (typeof options.plugins === 'function') {
    options.plugins = options.plugins(this)
  }
  if (!Array.isArray(options.plugins) || options.plugins.length === 0) {
    return content
  }

  var callback = this.async()
  import("imagemin")
    .then(function (imagemin) {
      imagemin.default.buffer(content, options)
        .then(function (buffer) { callback(null, buffer) })
    })
    .catch(function (error) { callback(error) })
}

module.exports.raw = true
