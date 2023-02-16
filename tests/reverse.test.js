const reverseString = require('../js/reverse');

test('Reversing a string correctly', () => {
    expect(reverseString('alessandro')).toMatch('ordnassela');
});

