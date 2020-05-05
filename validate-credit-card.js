const CreditCardTypes = require('./credit-card-types');

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

        const accountNumberString = this._cleanNumberString(cardNumber);

        const arr = accountNumberString.toString()
            .split('')
            .reverse()
            .map(char => parseInt(char));

        const lastDigit = arr.splice(0, 1)[0];

        let sum = arr.reduce((total, current, index) => {

            return index % 2 !== 0 ? total + current : total + ((current * 2) % 9);

        }, 0);

        return (sum + lastDigit) % 10 === 0;
    }

    /**
     * @param {String} cardNumber
     * @returns {String}
     * @description Returns name of the given credit card number.
     */

    static getCardName (cardNumber) {

        const accountNumberString = this._cleanNumberString(cardNumber);

        let cardName = '';

        CreditCardTypes.forEach(type => {
            if(type.regex.test(accountNumberString)) {

                return cardName = type.cardName;
            }
        });
        return cardName;
    }
}

module.exports = ValidateCreditCard;