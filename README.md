# validate-credit-card

Process Visa, American Express, Discover, Mastercard, Maestro, JCB and other Credit Card Numbers

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

```sh
$ npm install validate-credit-card
```

## API

```js
const creditCardValidator = require('validate-credit-card');

```

### creditCardValidator.getCardName(accountString)

Processes a string containing a partial or full credit card number and returns the card type.

### creditCardValidator.validateCard(accountString)

Processes a string containing a credit card number and returns true if the checksum is correct by Luhn algorithm.

## Example

```js
const creditCardValidator = require('validate-credit-card');
const isValidCard = creditCardValidator.validateCard('5500 0000 0000 0004');
```

[npm-image]: https://img.shields.io/npm/v/validate-credit-card
[npm-url]: https://npmjs.org/package/validate-credit-card
[downloads-url]: https://npmjs.org/package/validate-credit-card
[downloads-image]: https://img.shields.io/npm/dw/validate-credit-card