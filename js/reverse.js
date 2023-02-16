function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

module.exports = reverseString;

// Another method to get a string reversed
// function reverseString(string) {
//     let stringArray = string.split("");
//     let reverseArray = stringArray.reverse();
//     let joinArray = reverseArray.join("");
//     console.log(joinArray);
// }