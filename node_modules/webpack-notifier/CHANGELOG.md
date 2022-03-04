
Changelog
===============================================================================

v1.13.0
-------------------------------------------------------------------------------
  
- Update node-notifier to v9


v1.12.0
-------------------------------------------------------------------------------
  
- fix(dependencies): moved the erroneous dependency to devDependencies
- Add support set of images for different build status
- fix default title, when `title` option skipped
- Update node-notifier to v8

Minimum supported Node version is 6+


v1.11.1
-------------------------------------------------------------------------------
  
- support child compilation errors in webpack@<3.11.0


v1.11.0
-------------------------------------------------------------------------------
  
- Support for `title` function for dynamic titles  ([#53](https://github.com/Turbo87/webpack-notifier/pull/53))


v1.10.1
-------------------------------------------------------------------------------
  
- fix(emoji): show success icon
- docs(emoji): documentation about emoji option


v1.10.0
-------------------------------------------------------------------------------

- Add `onlyOnError` option ([#51](https://github.com/Turbo87/webpack-notifier/pull/51))


v1.9.1
-------------------------------------------------------------------------------

- reduced package size by 2 times


v1.9.0
-------------------------------------------------------------------------------

- Update node-notifier to v6 ([#56](https://github.com/Turbo87/webpack-notifier/pull/56))


v1.8.0
-------------------------------------------------------------------------------

- Add `--emoji` option ([#55](https://github.com/Turbo87/webpack-notifier/pull/55))


v1.7.0
-------------------------------------------------------------------------------

- Handle errors/warnings in child compilations ([#49](https://github.com/Turbo87/webpack-notifier/pull/49))


v1.6.0
-------------------------------------------------------------------------------

- Add support for webpack 4 plugin system ([#39](https://github.com/Turbo87/webpack-notifier/pull/39))


v1.5.1
-------------------------------------------------------------------------------

- Update `node-notifier` dependency ([#23](https://github.com/Turbo87/webpack-notifier/pull/23) and [#36](https://github.com/Turbo87/webpack-notifier/pull/36))


v1.5.0
-------------------------------------------------------------------------------

- Add `skipFirstNotification` option ([#21](https://github.com/Turbo87/webpack-notifier/pull/21))


v1.4.1
-------------------------------------------------------------------------------

- Add missing `logo.png` to published NPM package ([#18](https://github.com/Turbo87/webpack-notifier/pull/18))


v1.4.0
-------------------------------------------------------------------------------

- Pass all options to `node-notifier` ([@opensrcken](https://github.com/opensrcken))
- Strip ANSI escape codes from the messages ([@opensrcken](https://github.com/opensrcken))
- Remove unnecessary files from NPM package


v1.3.2
-------------------------------------------------------------------------------

- Use contentImage as icon on linux ([#17](https://github.com/Turbo87/webpack-notifier/pull/17))


v1.3.1
-------------------------------------------------------------------------------

- Republished v1.3.0 due to NPM deployment failure


v1.3.0
-------------------------------------------------------------------------------

- Prefix error + warning messages ([#13](https://github.com/Turbo87/webpack-notifier/pull/13))


v1.2.1
-------------------------------------------------------------------------------

- fixed `Cannot read property 'rawRequest' of undefined` error ([#5](https://github.com/Turbo87/webpack-notifier/issues/5))


v1.2.0
-------------------------------------------------------------------------------

- `alwaysNotify` option ([#4](https://github.com/Turbo87/webpack-notifier/pull/4))


v1.1.1
-------------------------------------------------------------------------------

- fixed `error is undefined` exception


v1.1.0
-------------------------------------------------------------------------------

- `title` and `contentImage` options ([#1](https://github.com/Turbo87/webpack-notifier/pull/1))
- `excludeWarnings` option ([#2](https://github.com/Turbo87/webpack-notifier/pull/2))
- fixed warnings display


v1.0.1
-------------------------------------------------------------------------------

- documentation improvements


v1.0.0
-------------------------------------------------------------------------------

- initial release after fork
