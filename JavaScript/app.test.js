const { doAllTheThings, numToString } = require('./app');

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information
test('doAllTheThings should be true', () => {
    expect(doAllTheThings()).toBeTruthy();
});

test('one digit should return the correct string', () => {
    expect(numToString(7)).toBe('seven');
});

test('two digits in the range of 10-19 should return the correct string', () => {
    expect(numToString(11)).toBe('eleven');
});

test('two digit number divisible by 10 should return the correct string', () => {
    expect(numToString(30)).toBe('thirty');
});

test('two digit number not divisible by 10 should return the correct string', () => {
    expect(numToString(31)).toBe('thirty-one');
});

test('three digit number divisible by 100 should return the correct string', () => {
    expect(numToString(400)).toBe('four hundred');
});

test('three digit number not divisible by 100 should return the correct string', () => {
    expect(numToString(431)).toBe('four hundred thirty-one');
});

test('six digit number divisible by 1000 should return the correct string', () => {
    expect(numToString(400000)).toBe('four hundred thousand');
});

test('six digit number not divisible by 1000 should return the correct string', () => {
    expect(numToString(123456)).toBe('one hundred twenty-three thousand four hundred fifty-six');
});

test('seven digit number divisible by 1000 should return the correct string', () => {
    expect(numToString(9000000)).toBe('nine million');
});

test('seven digit number not divisible by 1000 should return the correct string', () => {
    expect(numToString(7123456)).toBe('seven million one hundred twenty-three thousand four hundred fifty-six');
});