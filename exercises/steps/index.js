// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
function steps(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '#';

        }
        for (let k = i; k < n; k++) {
            str += ' ';
        }
        console.log(str);
    }
}
*/

/*
function steps(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                row += '#';
            } else {
                row += ' ';
            }
        }     
        console.log(row);
    }
}
*/

/*
function steps(n) {
    printRow(n, n);    
}

function printRow(currentRow, cols = 0) {
    if (currentRow === 0) {
        return;
    } else {
        let toPrint = '';
        for (let i = 0; i < cols; i++) {
            if (cols - currentRow >= i) {
                toPrint += '#';
            } else {
                toPrint += ' ';
            }
        }
        console.log(toPrint);
        printRow(currentRow - 1, cols);
    }
}
*/

/*
function steps(n, currentRow = 0) {
    if (n === currentRow) {
        return;
    } else {
        let toPrint = '';
        for (let i = 0; i < n; i++) {
            if (currentRow - i >= 0) {
                toPrint += '#';
            } else {
                toPrint += ' ';
            }
        }
        console.log(toPrint);
        steps(n, currentRow + 1);
    }
}
*/

function steps(n, currentRow = 0, toPrint = '') {
    if (n === currentRow) {
        return;
    } 
    if (n === toPrint.length) {
        console.log(toPrint);
        return steps(n, currentRow + 1);
    }
    if (toPrint.length <= currentRow) {
        toPrint += '#';
    } else {
        toPrint += ' ';
    }   
    steps(n, currentRow, toPrint);
}

module.exports = steps;
