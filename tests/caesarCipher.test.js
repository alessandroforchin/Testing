const caesarCipherBis = require('../js/caesarCipher');

test('Return a string with each letter shifted', () => {
    expect(caesarCipherBis('ale.forchin')).toMatch('fqj?ktwhmns');
})