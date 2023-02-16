const capitalize = require('../js/capitalize');

test('Firts character capitalized', () => {
    expect(capitalize('alessandro')).toMatch(/^[A-Z]/);
});

