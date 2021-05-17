# Number.parseFloat <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Number.parseFloat` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-number.parsefloat).

## Getting started

```sh
npm install --save number.parsefloat
```

## Usage/Examples

```js
console.log(Number.parseFloat("-3")); // -3
console.log(Number.parseFloat("0.43")); // 0.43
console.log(Number.parseFloat("test")); // NaN
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/number.parsefloat
[npm-version-svg]: https://versionbadg.es/es-shims/Number.parseFloat.svg
[deps-svg]: https://david-dm.org/es-shims/Number.parseFloat.svg
[deps-url]: https://david-dm.org/es-shims/Number.parseFloat
[dev-deps-svg]: https://david-dm.org/es-shims/Number.parseFloat/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Number.parseFloat#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/number.parsefloat.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/number.parsefloat.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/number.parsefloat.svg
[downloads-url]: https://npm-stat.com/charts.html?package=number.parsefloat
[codecov-image]: https://codecov.io/gh/es-shims/Number.parseFloat/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Number.parseFloat/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Number.parseFloat
[actions-url]: https://github.com/es-shims/Number.parseFloat/actions
