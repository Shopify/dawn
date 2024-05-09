'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var $Stdout = function $Stdout() {
  _classCallCheck(this, $Stdout);

  this.putc = putc;
  this.puts = puts;
};

exports['default'] = $Stdout;

function putc(arg) {
  if (arguments.length !== 1) {
    throw 'ArgumentError: wrong number of arguments (' + arguments.length + ' for 1)';
  }

  if (!((0, _lodash.isNumber)(arg) || (0, _lodash.isString)(arg))) {
    throw 'no implicit conversion of ' + typeof arg + ' into Integer (TypeError)';
  }

  var output = undefined;

  if ((0, _lodash.isString)(arg)) {
    output = arg.slice(0, 1);
  } else {
    output = String.fromCharCode(arg);
  }

  process.stdout.write(output);

  return arg;
}

function puts() {
  (0, _lodash.each)(arguments, function (arg) {
    if ((0, _lodash.isString)(arg) || (0, _lodash.isNumber)(arg) || (0, _lodash.isBoolean)(arg)) {
      _printWithNewLine(String(arg));
    } else if ((0, _lodash.isNull)(arg) || (0, _lodash.isUndefined)(arg)) {
      _printWithNewLine('');
    } else if ((0, _lodash.isRegExp)(arg)) {
      var stringifiedRegEx = _convertRegexToString(arg);
      _printWithNewLine(stringifiedRegEx);
    } else if (arg instanceof Error) {
      var stringifiedError = _convertErrorToString(arg);
      _printWithNewLine(stringifiedError);
    } else if ((0, _lodash.isArray)(arg)) {
      (0, _lodash.each)(arg, function (element) {
        puts(element);
      });
    } else if (!(0, _lodash.isPlainObject)(arg) && (0, _lodash.isObject)(arg)) {
      _printWithNewLine('#<' + arg.constructor.name + '>');
    } else {
      console.log(arg);
    }
  });
}

function _printWithNewLine(arg) {
  process.stdout.write(arg + '\n');
}

function _convertRegexToString(regex) {
  var str = String(regex);
  str = str.slice(1, -1);
  return '(?-mix:' + str + ')';
}

function _convertErrorToString(error) {
  if (error.message) return error.message;
  return String(error);
}
module.exports = exports['default'];