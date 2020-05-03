# credit-card-validator

Process Visa, Visa Electron, American Express, Discover, Mastercard, Maestro, JCB and other Credit Card Numbers

## Installation

```sh
$ npm install validate-credit-card
```

## API

```js
let creditCardValidator = require('validate-credit-card')

```

### creditCardValidator.getCardName(accountString)

Processes a string containing a partial or full credit card number and returns the card type.

### creditCardValidator.validateCard(accountString)

Processes a string containing a credit card number and returns true if the checksum is correct by Luhn algorithm.

## Example

```js
let creditCardValidator = require('validate-credit-card');
let isValidCard = creditCardValidator.validateCardAndSecCode('4111 1111 1111 1111', '412');
```