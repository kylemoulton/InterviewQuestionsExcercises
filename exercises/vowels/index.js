// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*
function vowels(str) {
    let vowelCount = 0;
    let arr = str.toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelCount++;
                break;
            default:
                break;
        }
    }
    return vowelCount;
}
*/

/*
function vowels(str) {
    let vowelCount = 0;
    let toTest = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (toTest.includes(char)) {
            vowelCount++;
        }
    }    
    return vowelCount;
}
*/

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
