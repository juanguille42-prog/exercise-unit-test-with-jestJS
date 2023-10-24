let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Convert from US Dollar to Japanese Yen
function fromDollarToYen(amountInDollar) {
    let amountInEuro = amountInDollar / oneEuroIs["USD"];
    let amountInYen = amountInEuro * oneEuroIs["JPY"];
    return Math.round(amountInYen * 100) / 100;
}

// Convert from Euro to US Dollar
function fromEuroToDollar(amountInEuro) {
    return amountInEuro * oneEuroIs["USD"];
}

// Convert from Japanese Yen to British Pound
function fromYenToPound(amountInYen) {
    let amountInEuro = amountInYen / oneEuroIs["JPY"];
    return amountInEuro * oneEuroIs["GBP"];
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}