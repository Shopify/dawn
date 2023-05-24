/**
 * line-column - Convert efficiently index to/from line-column in a string
 * @module  lineColumn
 * @license MIT
 */
"use strict";

var isArray  = require("isarray");
var isObject = require("isobject");
var slice = Array.prototype.slice;

module.exports = LineColumnFinder;

/**
 * Finder for index and line-column from given string.
 *
 * You can call this without `new` operator as it returns an instance anyway.
 *
 * @class
 * @param {string} str - A string to be parsed.
 * @param {Object|number} [options] - Options.
 *     This can be an index in the string for shorthand of `lineColumn(str, index)`.
 * @param {number} [options.origin=1] - The origin value of line and column.
 */
function LineColumnFinder(str, options) {
  if (!(this instanceof LineColumnFinder)) {
    if (typeof options === "number") {
      return (new LineColumnFinder(str)).fromIndex(options);
    }
    return new LineColumnFinder(str, options);
  }

  this.str = str || "";
  this.lineToIndex = buildLineToIndex(this.str);

  options = options || {};
  this.origin = typeof options.origin === "undefined" ? 1 : options.origin;
}

/**
 * Find line and column from index in the string.
 *
 * @param  {number} index - Index in the string. (0-origin)
 * @return {Object|null}
 *     Found line number and column number in object `{ line: X, col: Y }`.
 *     If the given index is out of range, it returns `null`.
 */
LineColumnFinder.prototype.fromIndex = function (index) {
  if (index < 0 || index >= this.str.length || isNaN(index)) {
    return null;
  }

  var line = findLowerIndexInRangeArray(index, this.lineToIndex);
  return {
    line: line + this.origin,
    col:  index - this.lineToIndex[line] + this.origin
  };
}

/**
 * Find index from line and column in the string.
 *
 * @param  {number|Object|Array} line - Line number in the string.
 *     This can be an Object of `{ line: X, col: Y }`, or
 *     an Array of `[line, col]`.
 * @param  {number} [column] - Column number in the string.
 *     This must be omitted or undefined when Object or Array is given
 *     to the first argument.
 * @return {number}
 *     Found index in the string. (always 0-origin)
 *     If the given line or column is out of range, it returns `-1`.
 */
LineColumnFinder.prototype.toIndex = function (line, column) {
  if (typeof column === "undefined") {
    if (isArray(line) && line.length >= 2) {
      return this.toIndex(line[0], line[1]);
    }
    if (isObject(line) && "line" in line && ("col" in line || "column" in line)) {
      return this.toIndex(line.line, ("col" in line ? line.col : line.column));
    }
    return -1;
  }
  if (isNaN(line) || isNaN(column)) {
    return -1;
  }

  line -= this.origin;
  column -= this.origin;

  if (line >= 0 && column >= 0 && line < this.lineToIndex.length) {
    var lineIndex = this.lineToIndex[line];
    var nextIndex = (
      line === this.lineToIndex.length - 1
        ? this.str.length
        : this.lineToIndex[line + 1]
    );

    if (column < nextIndex - lineIndex) {
      return lineIndex + column;
    }
  }
  return -1;
}

/**
 * Build an array of indexes of each line from a string.
 *
 * @private
 * @param   str {string}  An input string.
 * @return  {number[]}    Built array of indexes. The key is line number.
 */
function buildLineToIndex(str) {
  var lines = str.split("\n"),
      lineToIndex = new Array(lines.length),
      index = 0;

  for (var i = 0, l = lines.length; i < l; i++) {
    lineToIndex[i] = index;
    index += lines[i].length + /* "\n".length */ 1;
  }
  return lineToIndex;
}

/**
 * Find a lower-bound index of a value in a sorted array of ranges.
 *
 * Assume `arr = [0, 5, 10, 15, 20]` and
 * this returns `1` for `value = 7` (5 <= value < 10),
 * and returns `3` for `value = 18` (15 <= value < 20).
 *
 * @private
 * @param  arr   {number[]} An array of values representing ranges.
 * @param  value {number}   A value to be searched.
 * @return {number} Found index. If not found `-1`.
 */
function findLowerIndexInRangeArray(value, arr) {
  if (value >= arr[arr.length - 1]) {
    return arr.length - 1;
  }

  var min = 0, max = arr.length - 2, mid;
  while (min < max) {
    mid = min + ((max - min) >> 1);

    if (value < arr[mid]) {
      max = mid - 1;
    } else if (value >= arr[mid + 1]) {
      min = mid + 1;
    } else { // value >= arr[mid] && value < arr[mid + 1]
      min = mid;
      break;
    }
  }
  return min;
}
