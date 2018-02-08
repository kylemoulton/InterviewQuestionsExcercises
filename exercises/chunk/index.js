// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let chunk = [];
//     let currentIndex = 0;
//     let i = 0;
//     while (i < array.length) {
//         chunk.push([]);
//         for (var j = 0; j < size && i < array.length; j++) {
//             chunk[currentIndex].push(array[i]);
//             i++;
//         }
//         currentIndex++;
//     }
    
//     return chunk;
// }

// function chunk(array, size) {
//     let chunked = [];
//     for (let element of array) {
//         if (!chunked[chunked.length - 1] || chunked[chunked.length - 1].length === size) {
//             chunked.push([element]);
//         } else {
//             chunked[chunked.length - 1].push(element);
//         }
//     }

//     return chunked;
// }

function chunk(array, size) {
    let chunked = [];
    let i = 0;
    while (i < array.length) {
        // Not necessary, slice returns only up to length - 1 if larger index specified
        // let endingIndex = i + size;
        // let endingIndex = Math.min(i + size, array.length);
        chunked.push(array.slice(i, i + size));
        i += size;
    }

    return chunked;
}

module.exports = chunk;
