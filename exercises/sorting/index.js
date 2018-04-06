// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j + 1 < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }
        if (smallestIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length > 1) {
        let left = mergeSort(arr.slice(0, Math.ceil(arr.length / 2)));
        let right = mergeSort(arr.slice(Math.ceil(arr.length / 2)));
        return merge(left, right);
    } else {
        return arr;
    }
}

function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }   
    return [...arr, ...left, ...right];
    
    // if (left.length) {
    //     arr.push(...left);
    // } else if (right.length) {
    //     arr.push(...right);
    // }
}

/*
function merge(left, right) {
    let arr = [];

    while (left.length > 0 || right.length > 0) {
        if (left[0] !== undefined && right[0] !== undefined) {
            if (left[0] <= right[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        } else if (left[0] === undefined) {
            arr.push(right.shift());
        } else {
            arr.push(left.shift());
        }
    }
    return arr;
}
*/

/*
function merge(left, right) {
    let arr = [];
    let currentIndex = 0;

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[currentIndex] = left[i];
            i++
        } else {
            arr[currentIndex] = right[j];
            j++;
        }
        currentIndex++;
    }   

    while (i < left.length) {
        arr[currentIndex] = left[i];
        i++;
        currentIndex++;
    }

    while (j < right.length) {
        arr[currentIndex] = right[j]
        j++;
        currentIndex++;
    }

    return arr;
}
*/



module.exports = { bubbleSort, selectionSort, mergeSort, merge };
