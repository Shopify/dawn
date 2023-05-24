# line-column

[![Build Status](https://travis-ci.org/io-monad/line-column.svg?branch=master)](https://travis-ci.org/io-monad/line-column) [![Coverage Status](https://coveralls.io/repos/github/io-monad/line-column/badge.svg?branch=master)](https://coveralls.io/github/io-monad/line-column?branch=master) [![npm version](https://badge.fury.io/js/line-column.svg)](https://badge.fury.io/js/line-column)

Node module to convert efficiently index to/from line-column in a string.

## Install

    npm install line-column

## Usage

### lineColumn(str, options = {})

Returns a `LineColumnFinder` instance for given string `str`.

#### Options

| Key     | Description | Default |
| ------- | ----------- | ------- |
| `origin`  | The origin value of line number and column number | `1` |

### lineColumn(str, index)

This is just a shorthand for `lineColumn(str).fromIndex(index)`.

### LineColumnFinder#fromIndex(index)

Find line and column from index in the string.

Parameters:

- `index` - `number` Index in the string. (0-origin)

Returns:

- `{ line: x, col: y }` Found line number and column number.
- `null` if the given index is out of range.

### LineColumnFinder#toIndex(line, column)

Find index from line and column in the string.

Parameters:

- `line` - `number` Line number in the string.
- `column` - `number` Column number in the string.

or

- `{ line: x, col: y }` - `Object` line and column numbers in the string.<br>A key name `column` can be used instead of `col`.

or

- `[ line, col ]` - `Array` line and column numbers in the string.

Returns:

- `number` Found index in the string.
- `-1` if the given line or column is out of range.

## Example

```js
var lineColumn = require("line-column");

var testString = [
  "ABCDEFG\n",         // line:0, index:0
  "HIJKLMNOPQRSTU\n",  // line:1, index:8
  "VWXYZ\n",           // line:2, index:23
  "日本語の文字\n",    // line:3, index:29
  "English words"      // line:4, index:36
].join("");            // length:49

lineColumn(testString).fromIndex(3)   // { line: 1, col: 4 }
lineColumn(testString).fromIndex(33)  // { line: 4, col: 5 }
lineColumn(testString).toIndex(1, 4)  // 3
lineColumn(testString).toIndex(4, 5)  // 33

// Shorthand of .fromIndex (compatible with find-line-column)
lineColumn(testString, 33)            // { line:4, col: 5 }

// Object or Array is also acceptable
lineColumn(testString).toIndex({ line: 4, col: 5 })     // 33
lineColumn(testString).toIndex({ line: 4, column: 5 })  // 33
lineColumn(testString).toIndex([4, 5])                  // 33

// You can cache it for the same string. It is so efficient. (See benchmark)
var finder = lineColumn(testString);

finder.fromIndex(33)     // { line: 4, column: 5 }
finder.toIndex(4, 5)     // 33

// For 0-origin line and column numbers
var oneOrigin = lineColumn(testString, { origin: 0 });

oneOrigin.fromIndex(33)  // { line: 3, column: 4 }
oneOrigin.toIndex(3, 4)  // 33
```

## Testing

    npm test

## Benchmark

The popular package [find-line-column](https://www.npmjs.com/package/find-line-column) provides the same "index to line-column" feature.

Here is some benchmarking on `line-column` vs `find-line-column`. You can run this benchmark by `npm run benchmark`. See [benchmark/](benchmark/) for the source code.

```
long text  + line-column (not cached) x     72,989 ops/sec ±0.83% (89 runs sampled)
long text  + line-column (cached)     x 13,074,242 ops/sec ±0.32% (89 runs sampled)
long text  + find-line-column         x     33,887 ops/sec ±0.54% (84 runs sampled)
short text + line-column (not cached) x  1,636,766 ops/sec ±0.77% (82 runs sampled)
short text + line-column (cached)     x 21,699,686 ops/sec ±1.04% (82 runs sampled)
short text + find-line-column         x    382,145 ops/sec ±1.04% (85 runs sampled)
```

As you might have noticed, even not cached version of `line-column` is 2x - 4x faster than `find-line-column`, and cached version of `line-column` is remarkable 50x - 380x faster.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT (See LICENSE)
