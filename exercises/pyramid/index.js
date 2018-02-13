// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


/*
            X's     Spaces          
    X    	0 - 1 	0 - 8 4/4       
   XXX		1 - 3	1 - 6 3/3        
  XXXXX		2 - 5	2 - 4 2/2      
 XXXXXXX	3 - 7	3 - 2 1/1        
XXXXXXXXX	4 - 9	4 - 0 0/0       
Cols = 2 n - 1 = 9
Spaces on left while length < n - i - 1
X's to print => 2 * i + 1
Spaces on right while length > (n - i - 1) + (2i + 1) - 1 = n + i - 1
*/

function pyramid(n) {
    for (let i = 0; i < n; i++) {
        let toPrint = '';
        for (let j = 0; j < 2 * n - 1; j++) {
            if (toPrint.length < n - i - 1 || toPrint.length > n + i - 1) {
                toPrint += ' ';
            } else {
                toPrint += '#';
            }
        }
        console.log(toPrint);
    }
}

module.exports = pyramid;
