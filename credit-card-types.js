const CreditCardTypes = [
    {
        'cardName' : 'American Express',
        'regex' : /^3[47][0-9]{13}$/,
    },
    {
        'cardName' : 'China T-Union',
        'regex' : /^31[0-9]{17}$/,
    },
    {
        'cardName' : 'China UnionPay',
        'regex' : /^(62|81){14,17}$/,
    },
    {
        'cardName' : 'Diners Club enRoute',
        'regex' : /^3(2014|2149)[0-9]{11}$/,
    },
    {
        'cardName' : 'Diners Club International',
        'regex' : /^3(?:0[0-5]|[68][0-9])[0-9]{11,16}$/,
    },
    {
        'cardName' : 'Discover Card',
        'regex' : /^6(?:011|5[0-9]{2})[0-9]{12,15}$/,
    },
    {
        'cardName' : 'InterPayment',
        'regex' : /^636[0-9]{13,16}$/,
    },
    {
        'cardName' : 'InstaPayment',
        'regex' : /^63(7|9)[0-9]{13}$/,
    },
    {
        'cardName' : 'JCB',
        'regex' : /^(?:2131|1800|35[0-9]{3})[0-9]{11,15}$/,
    },
    {
        'cardName' : 'Maestro',
        'regex' : /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)[0-9]{8,15}$/,
    },
    {
        'cardName' : 'MasterCard',
        'regex' : /^5[1-5][0-9]{14}$|^222[1-9][0-9]{11}$|^22[3-9][0-9]{13}$|^2[3-6][0-9]{14}|^27[01][0-9]{13}$|^2720[0-9]{12}$/,
    },
    {
        'cardName' : 'UnionPay',
        'regex' : /^(62|88)[0-9]{14}$/,
    },
    {
        'cardName': 'Visa',
        'regex' : /^4[0-9]{15}$/,
    },
];

module.exports = CreditCardTypes;