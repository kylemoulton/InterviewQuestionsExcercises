// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let strToReturn = '';

//     for (var i = 0; i < str.length; i++) {
//         strToReturn += str.charAt(str.length - 1 - i);
//     }
//     return strToReturn;
// }

// ES2015 Syntax
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// ES5.1 Syntax
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
