const calculator = require('../js/calculator');

test('Returning correct calculation', () => {
    expect(calculator.sum(10, 30)).toBe(40);
});

test('Returning correct calculation', () => {
    expect(calculator.subtract(50, 12)).toBe(38);
});

test('Returning correct calculation', () => {
    expect(calculator.multiply(6, 4)).toBe(24);
});

test('Returning correct calculation', () => {
    expect(calculator.divide(100, 20)).toBe(5);
});