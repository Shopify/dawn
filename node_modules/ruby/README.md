# Ruby-Node
[![Build Status](https://travis-ci.org/crookedneighbor/ruby-node.svg?branch=master)](https://travis-ci.org/crookedneighbor/ruby-node)
---

Helper methods from ruby ported to Node.

![Ruby + Node](https://raw.githubusercontent.com/crookedneighbor/ruby-node/master/docs/assets/images/logos.png)

## Getting Started

```bash
npm install ruby --save
```

```js
let ruby = require('ruby');

let words = ruby.w('I am not throwing away my shot!');
words; // ['I', 'am', 'not', 'throwing', 'away', 'my', 'shot!']

ruby.puts(words);
// I
// am
// not
// throwing
// away
// my
// shot!
```

```js
let ruby = require('ruby');
ruby.add_methods_to_string_prototype();

'stressed'.reverse; // 'desserts'
```

For more info, [read the docs](http://crookedneighbor.github.io/ruby-node/)

## Tests

```bash
npm t
```
