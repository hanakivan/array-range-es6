# array-range-es6

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/array-range-es6?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/array-range-es6)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/array-range-es6)](https://www.npmjs.com/package/@ivanhanak_com/array-range-es6)

Absolutely lightweight (0.01kb) library to create an array range.

It's basically this line of code: `export default (length) => ([...Array(length).keys()] );` but is like a library so you don't have to define it million times in your project.

You can find array-range for older browsers (e.g. IE11) [here](https://www.npmjs.com/package/@ivanhanak_com/array-range). 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/array-range-es6
```

Using yarn:

```sh
yarn add @ivanhanak_com/array-range-es6
```

## Import
```javascript
import range from '@ivanhanak_com/array-range-es6';
```

## Usage

```javascript
const rangeItems = range(5); //creates [0,1,2,3,4]
```

## Browser support
EDGE 13+, Safari 12+, (✅ and also Chrome & Firefox)