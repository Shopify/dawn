"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "sourcePlugin", {
  enumerable: true,
  get: function () {
    return _sourcePlugin.default;
  }
});
Object.defineProperty(exports, "minimizerPlugin", {
  enumerable: true,
  get: function () {
    return _minimizerPlugin.default;
  }
});

var _sourcePlugin = _interopRequireDefault(require("./source-plugin"));

var _minimizerPlugin = _interopRequireDefault(require("./minimizer-plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }