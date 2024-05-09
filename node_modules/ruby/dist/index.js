'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _stdout = require('./stdout');

var _stdout2 = _interopRequireDefault(_stdout);

var _integer = require('./integer');

var _integer2 = _interopRequireDefault(_integer);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _percent_strings = require('./percent_strings');

var _percent_strings2 = _interopRequireDefault(_percent_strings);

var Ruby = (function () {
  function Ruby() {
    _classCallCheck(this, Ruby);

    this.$stdout = new _stdout2['default']();
    (0, _lodash.assign)(this, this.$stdout);

    this.int = new _integer2['default']();

    this.str = new _string2['default']();

    (0, _lodash.assign)(this, new _percent_strings2['default']());
  }

  _createClass(Ruby, [{
    key: 'add_methods_to_number_prototype',
    value: function add_methods_to_number_prototype() {
      _addMethodsToPrototype(Number.prototype, this.int);
    }
  }, {
    key: 'add_methods_to_string_prototype',
    value: function add_methods_to_string_prototype() {
      _addMethodsToPrototype(String.prototype, this.str);
    }
  }]);

  return Ruby;
})();

function _generate_method_with_block(func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return func.apply(undefined, [this].concat(args));
  };
}

function _addMethodsToPrototype(prototype, object) {
  var methods = (0, _lodash.functions)(object);

  (0, _lodash.each)(methods, function (method_name) {
    var method = object[method_name];

    if (method.length > 1) {
      prototype[method_name] = _generate_method_with_block(method);
    } else {
      Object.defineProperty(prototype, method_name, { get: method });
    }
  });
}

exports['default'] = new Ruby();
module.exports = exports['default'];