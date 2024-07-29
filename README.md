# next-get-valid
> Get valid data by condtion.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-get-valid
```

## usage
```js
import '@jswork/next-get-valid';

const data = {
  name: 'xiaoming',
  age: 18,
  email: ''
};

const isValidEmail = (value) => {
  return value.indexOf('@') > -1;
};

const res = nx.getValid(data, 'email', 'example@email', isValidEmail);
// res -> 'example@email'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-get-valid/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-get-valid
[version-url]: https://npmjs.org/package/@jswork/next-get-valid

[license-image]: https://img.shields.io/npm/l/@jswork/next-get-valid
[license-url]: https://github.com/afeiship/next-get-valid/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-get-valid
[size-url]: https://github.com/afeiship/next-get-valid/blob/master/dist/next-get-valid.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-get-valid
[download-url]: https://www.npmjs.com/package/@jswork/next-get-valid
