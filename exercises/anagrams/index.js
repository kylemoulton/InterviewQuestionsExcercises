// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*
function anagrams(stringA, stringB) {
    stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB.replace(/[^\w]/g, '').toLowerCase();

    if (stringA.length !== stringB.length) {
        return false;
    }

    let charCountsA = {};
    let charCountsB = {};

    for (let character of stringA) {
        charCountsA[character] = charCountsA[character] + 1 || 1;
    }
    for (let character of stringB) {
        charCountsB[character] = charCountsB[character] + 1 || 1;
    }

    if (Object.keys(charCountsA).length !== Object.keys(charCountsB).length) {
        return false;
    } 
    
    for (let char in charCountsA) {
        if (charCountsA[char] !== charCountsB[char]) {
            return false;
        }
    }
    return true;
}
*/

/*
function anagrams(stringA, stringB) {
    let charCountsA = createCharMap(stringA);
    let charCountsB = createCharMap(stringB);

    if (Object.keys(charCountsA).length !== Object.keys(charCountsB).length) {
        return false;
    }

    for (let character in charCountsA) {
        if (charCountsA[character] !== charCountsB[character]) {
            return false;
        }
    }
    return true;
}

function createCharMap(string) {
    const charCounts = {};
    string.replace(/[^w]/g, '').toLowerCase();

    for (let char of string) {
        charCounts[char] = charCounts[char] + 1 || 1;
    }

    return charCounts;
}
*/

function anagrams(stringA, stringB) {
    stringA.replace(/[^w]/g, '');
    stringB.replace(/[^w]/g, '');
    
    const sortedA = stringA.toLowerCase().split('').sort().join('');
    const sortedB = stringB.toLowerCase().split('').sort().join('');
    
    return sortedA === sortedB;
}

module.exports = anagrams;
