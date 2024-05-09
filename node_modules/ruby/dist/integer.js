'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _Integer = function _Integer() {
  _classCallCheck(this, _Integer);

  this.even = even;
  this.even_questionmark = this.even;
  this.gcd = gcd;
  this.gcdlcm = gcdlcm;
  this.lcm = lcm;
  this.next = next;
  this.odd = odd;
  this.odd_questionmark = this.odd;
  this.pred = pred;
  this.succ = this.next;
  this.times = times;
  this.upto = upto;
  this.to_i = to_i;
};

exports['default'] = _Integer;

function even(num) {
  num = num || this;

  return num % 2 === 0;
}

function gcd(_x, _x2) {
  var _this = this;

  var _again = true;

  _function: while (_again) {
    var number_1 = _x,
        number_2 = _x2;
    _again = false;

    if ((0, _lodash.isUndefined)(number_1)) number_1 = _this;

    if (number_2) {
      _this = undefined;
      _x = number_2;
      _x2 = number_1 % number_2;
      _again = true;
      continue _function;
    } else {
      return Math.abs(number_1);
    }
  }
}

function gcdlcm(number_1, number_2) {
  if ((0, _lodash.isUndefined)(number_1)) number_1 = this;

  var greatest_common_divisor = gcd(number_1, number_2);
  var least_common_multiple = lcm(number_1, number_2);

  return [greatest_common_divisor, least_common_multiple];
}

function lcm(number_1, number_2) {
  if ((0, _lodash.isUndefined)(number_1)) number_1 = this;

  var top_of_equation = Math.abs(number_1 * number_2);
  var bottom_of_equation = gcd(number_1, number_2);

  return top_of_equation / bottom_of_equation;
}

function next(num) {
  num = num || this;

  return num + 1;
}

function odd(num) {
  num = num || this;

  return num % 2 != 0;
}

function pred(num) {
  num = num || this;

  return num - 1;
}

function times(num, block) {
  num = num || this;

  (0, _lodash.times)(num, block);
}

function upto(original_number, upto_number, block) {
  original_number = original_number || this;

  for (var i = original_number; i <= upto_number; i++) {
    block(i);
  }
}

function to_i(num) {
  num = num || this;

  return num;
}
module.exports = exports['default'];