const analyzeArray = require('../js/analyzeArray');

test('Returning an object with properties', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({ average: 4, min: 1, max: 8, length: 6 });
})
