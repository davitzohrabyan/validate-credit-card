const { creditCardTypes } = require('./credit-card-types');

class ValidateCreditCard {

    /**
     * @param {String} string
     * @returns {String}
     * @description Converts given card number to string and removes extra signs.
     */

    static _cleanNumberString (string) {

        const cleaned = string.replace(' ,.-', '');

        const matches = cleaned.match(/[0-9]+/g);

        if(!matches)
            return '';

        return matches.join('');
    }

    /**
     * @param {String} cardNumber
     * @returns {Boolean}
     * @description Checks given credit card number with Luhn algorithm.
     */

    static validateCard (cardNumber) {

        let accountNumberString = this._cleanNumberString(cardNumber);

        const arr = (accountNumberString + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));

        let lastDigit = arr.splice(0, 1)[0];

        let sum = arr.reduce((acc, val, i) => {
            return i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9
        }, 0);

        sum += lastDigit;

        return sum % 10 === 0;
    }

    /**
     * @param {String} cardNumber
     * @returns {String}
     * @description Returns name of the given credit card number.
     */

    static getCardName (cardNumber) {

        let accountNumberString = this._cleanNumberString(cardNumber);

        let cardName = '';

        for(let type = 0; type < creditCardTypes.length; type++) {

            if(creditCardTypes[type].regex.test(accountNumberString)) {

                cardName = creditCardTypes[type].cardName;
                break;
            }
        }
        return cardName;
    }
}

module.exports = ValidateCreditCard;