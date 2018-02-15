// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
function matrix(n) {
    let arr = [];
    let innerArr = [];
    for (let i = 0; i < n; i++) {
        innerArr.push(0);
    }
    for (let i = 0; i < n; i++) {
        arr.push(innerArr.slice());
    }

    let direction = 'r';
    let row = 0;
    let col = 0;
    let val = 1;

    for (let i = 1; i <= n * n; i++) {
        arr[row][col] = val;

        console.log(arr);
        switch(direction) {
            case 'r':
                if (col < n - 1 && arr[row][col + 1] === 0) {
                    col++;
                } else {
                    row++;
                    direction = 'd';
                }
                break;
            case 'd':
                if (row < n - 1 && arr[row + 1][col] === 0) {
                    row++;
                } else {
                    col--;
                    direction = 'l';
                }
                break;
            case 'l':
                if (col > 0 && arr[row][col - 1] === 0) {
                    col--;
                } else {
                    row--;
                    direction = 'u';
                }
                break;
            case 'u':
                if (row > 0 && arr[row - 1][col] === 0) {
                    row--;
                } else {
                    col++;
                    direction = 'r';
                }
                break;
          }
        val++;
    }

    return arr;
}
*/

function matrix(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([]);
    }

    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;
    
    let counter = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            arr[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            arr[i][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            arr[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            arr[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return arr;
}

module.exports = matrix;
