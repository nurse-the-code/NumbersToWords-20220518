// Implement your exercise in this file.  If you need to implement additional functions,
// remember to export them as well, if you need to access them in your unit test.
function doAllTheThings() {
    console.log("Hi there");
    return true;
}

const numLookup = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
}

const orders = [
    "hundred", "thousand", "million", "billion", "trillion"
]

function numToString(num) {
    if (num in numLookup) {
        // Cover 0-19 and multiples of 10 up to 90 with a straight lookup
        return numLookup[num];
    } else if (num < 100) {
        // Cover two-digit numbers that aren't multiples of 10
        // with simple recursion (but could also be a lookup)
        let tens = Math.floor(num / 10) * 10;
        return `${numToString(tens)}-${numToString(num % 10)}`
    } else {
        // Anything larger is composed of the other cases.
        //
        // Find out what our biggest named place value is...
        let order = Math.floor(Math.log10(num) / 3);
        // ...and the number corresponding to that place value
        let base = Math.pow(10, 3*(order));

        // Three-digit numbers and four-digit numbers that
        // aren't multiples of 1000 need slightly different
        // handling.
        if (num < 10000 && num % 1000 !== 0) {
            order = 0;
            base = 100;
        }

        // Now build the number with recursive calls.
        let aboveBase = Math.floor(num / base);
        let string = `${numToString(aboveBase)} ${orders[order]}`;
        if (num % base !== 0) {
            string += ` ${numToString(num % base)}`;
        }
        return string
    }
}


module.exports = {doAllTheThings, numToString};