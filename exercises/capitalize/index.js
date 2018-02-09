// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
function capitalize(str) {
    arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length);  
    }
    return arr.join(' ');
}
*/

/*
function capitalize(str) {
    let words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}
*/

function capitalize(str) {
    let resultString = str[0].toUpperCase() || '';
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            resultString += str[i].toUpperCase();
        } else {
            resultString += str[i];
        }
    }
    return resultString;
}

module.exports = capitalize;
