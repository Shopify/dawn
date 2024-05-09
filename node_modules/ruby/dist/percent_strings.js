'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PercentStrings = function PercentStrings() {
  _classCallCheck(this, PercentStrings);

  this.w = w;
  this.percent_w = percent_w;
};

exports['default'] = PercentStrings;

function w(words) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var delimiter = options.delimiter || ' ';
  var wordsArray = words.split(delimiter);

  return wordsArray;
}

var percent_w = w;
module.exports = exports['default'];