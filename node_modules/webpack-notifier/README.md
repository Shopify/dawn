# webpack-notifier

[![npm Version](https://img.shields.io/npm/v/webpack-notifier.svg)](https://www.npmjs.com/package/webpack-notifier)
[![GitHub Workflow Status](https://github.com/Turbo87/webpack-notifier/workflows/CI/badge.svg)](https://github.com/Turbo87/webpack-notifier/actions?query=workflow:CI)
[![Coverage Status](https://coveralls.io/repos/github/Turbo87/webpack-notifier/badge.svg)](https://coveralls.io/github/Turbo87/webpack-notifier?branch=master)
[![Code Style](https://badgen.net/badge/code%20style/Airbnb/007ec6?icon=airbnb)](https://github.com/airbnb/javascript)  
[![npm](https://img.shields.io/npm/dm/webpack-notifier)](https://www.npmjs.com/package/webpack-notifier)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/webpack-notifier)

This is a [webpack](http://webpack.github.io/) plugin that uses the
[node-notifier](https://github.com/mikaelbr/node-notifier) package to
display build status system notifications to the user.

![webpack-notifier screenshot](screenshot.png)

> This is a fork of the
[webpack-error-notification](https://github.com/vsolovyov/webpack-error-notification)
plugin. It adds support for Windows and there is no need to manually install
the `terminal-notifier` package on OS X anymore.

The plugin will notify you about the first run (success/fail),
all failed runs and the first successful run after recovering from
a build failure. In other words: it will stay silent if everything
is fine with your build.


## Installation

Use `npm` to install this package:

    npm install --save-dev webpack-notifier

Check the `node-notifier`
[Requirements](https://github.com/mikaelbr/node-notifier#requirements)
whether you need to install any additional tools for your OS.


## Usage

In the `webpack.config.js` file:

```js
var WebpackNotifierPlugin = require('webpack-notifier');

var config = module.exports = {
  // ...

  plugins: [
    new WebpackNotifierPlugin(),
  ]
}
```


## Configuration

### Title

Title shown in the notification.

```js
new WebpackNotifierPlugin({title: 'Webpack'});
```

```js
new WebpackNotifierPlugin({title: function (params) {
  return `Build status is ${params.status} with message ${params.message}`;
}});
```

### Emojis in message text

Show status emoji icon before the message.

```js
new WebpackNotifierPlugin({emoji: true});
```

### Content Image

Image shown in the notification. Can be a path string or object with paths.

#### String path:
```js
var path = require('path');

new WebpackNotifierPlugin({contentImage: path.join(__dirname, 'logo.png')});
```

#### Object string path:
```js
var path = require('path');

const statusesPaths = {
  success: path.join(__dirname, 'success.png'),
  warning: path.join(__dirname, 'warning.png'),
  error: path.join(__dirname, 'error.png')
}

new WebpackNotifierPlugin({contentImage: statusesPaths});
```

### Exclude Warnings

If set to `true`, warnings will not cause a notification.

```js
new WebpackNotifierPlugin({excludeWarnings: true});
```

### Always Notify

Trigger a notification every time. Call it "noisy-mode".

```js
new WebpackNotifierPlugin({alwaysNotify: true});
```

### Notify on error

Trigger a notification only on error.

```js
new WebpackNotifierPlugin({onlyOnError: true});
```

### Skip Notification on the First Build

Do not notify on the first build.  This allows you to receive notifications on subsequent incremental builds without being notified on the initial build.

```js
new WebpackNotifierPlugin({skipFirstNotification: true});
```
