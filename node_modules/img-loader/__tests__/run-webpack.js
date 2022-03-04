'use strict'
var path = require('path')
var webpack = require('webpack')
var MemoryFS = require('memory-fs')

module.exports = function (entry, options) {
  var compiler = webpack({
    context: __dirname,
    entry: entry,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    mode: 'none',
    module: {
      rules: [{
        test: /./,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'image'
            }
          },
          {
            loader: path.resolve(__dirname, '../index.js'),
            options: options
          }
        ]
      }]
    }
  })
  compiler.outputFileSystem = new MemoryFS()
  return new Promise(function (resolve, reject) {
    compiler.run(function (error, stats) {
      if (!error && stats.compilation.errors.length) {
        error = stats.compilation.errors[0]
      }
      return error ? reject(error) : resolve(stats.compilation.assets.image.source())
    })
  })
}
