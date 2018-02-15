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

module.exports = matrix;
