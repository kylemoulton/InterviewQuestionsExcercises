// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let characterCounts = {};
//     for (let character of str) {
//         if (characterCounts[character] != undefined) {
//             characterCounts[character]++;
//         } else {
//             characterCounts[character] = 1;
//         }
//     }

//     currentChar = str.charAt(0);
//     currentMax = characterCounts[currentChar];
//     for (let key of Object.keys(characterCounts)) {
//         if (characterCounts[key] > currentMax) {
//             currentChar = key;
//             currentMax = characterCounts[currentChar];
//         }
//     }
//     return currentChar;
// }

// function maxChar(str) {
//     let characterCounts = {};
//     let maxChar = str.charAt(0);
//     for (let character of str) {
//         if (characterCounts[character] != undefined) {
//             characterCounts[character]++;
//         } else {
//             characterCounts[character] = 1;
//         }
//         if (characterCounts[character] > characterCounts[maxChar]) {
//             maxChar = character;
//         }
//     }
//     return maxChar;
// }

// function maxChar(str) {
//     let charCounts = {};
//     for (let char of str) {
//         charCounts[char] = charCounts[char]++ || 1;
//     }

//     let max = 0;
//     let maxChar = '';

//     for (let char in charCounts) {
//         if (charCounts[char] > max) {
//             max = charCounts[char];
//             maxChar = char;
//         }
//     }
    
//     return maxChar;
// }

function maxChar(str) {
    let chars = {};
    let maxChar = str.charAt(0);
     
    for (let char of str) {
        chars[char] = chars[char] + 1 || 1;
        if (chars[char] > chars[maxChar]) {
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
