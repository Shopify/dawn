'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _String = (function () {
  function _String() {
    _classCallCheck(this, _String);

    this.chars = chars;
    this.downcase = downcase;
    this.empty = empty;
    this.empty_questionmark = this.empty;
    this.reverse = reverse;
    this.upcase = upcase;
  }

  _createClass(_String, [{
    key: 'new',
    value: function _new(str) {
      return '' + str;
    }
  }]);

  return _String;
})();

exports['default'] = _String;

function chars(str) {
  str = str || this;

  return str.split('');
}

function downcase(str) {
  str = str || this;

  return str.toLowerCase();
}

function empty(str) {
  if (str === undefined) {
    str = this;
  }

  return str.length === 0;
}

function reverse(str) {
  str = str || this;

  var parts = str.split('');
  var reversedParts = parts.reverse();
  var reversed = reversedParts.join('');

  return reversed;
}

function upcase(str) {
  str = str || this;

  return str.toUpperCase();
}
module.exports = exports['default'];