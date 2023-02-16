// Caesar cipher in a single function
function caesarCipher(string) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let cipher = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];

    var result = [];

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (string[i] === alphabet[j]) {
                result.push(cipher[j]);
            }
        }
    }
    return result.join("");
}

// Let's separate the single function into smaller ones;
// To decipher a single letter I create changeLetter function;
function changeLetter(letter, key) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let decipher = [];

    for (let i = 0; i < alphabet.length; i++) {
        if (letter == alphabet[i]) {
            decipher.push(alphabet[i + key]);
        }
    }
    return decipher;
}

function changePunctuation(str) {
    let punctuation = ['.',',','-','!','?'];
    let cipherPunctuation = ['?','.',',','-','!'];

    let newPunctuation = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < punctuation.length; j++) {
            if (str[i] === punctuation[j]) {
                newPunctuation.push(cipherPunctuation[j]);
            }
        }
    }
    return newPunctuation.join("");
}

function caesarCipherBis(str) {
    let newString = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '.' || ',' || '-' || '!' || '?') {
            newString.push(changePunctuation(str[i]));
        } 
        newString.push(changeLetter(str[i], 5));
    }
    return newString.join("");
}

module.exports = caesarCipherBis;