// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

/*
Conceptual notes:

[ ]     [1 2 3 4 5]

[5 4 3 2]   []
remove 1

[5 4 3]     []
remove 2

[5 4 3]   [6 7 8 9]
add 6 7 8 9


[]  [6 7 8 9]
remove 3 4 5


[9 8 7]     []
remove 6
*/

const Stack = require('./stack');

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(val) {
        this.s2.push(val);
    }

    remove() {
        if (!this.s1.peek()) {
            while (this.s2.peek()) {
                this.s1.push(this.s2.pop());
            }
        }
        return this.s1.pop()
    }

    peek() {
        if (!this.s1.peek()) {
            while (this.s2.peek()) {
                this.s1.push(this.s2.pop());
            }
        }
        return this.s1.peek();
    }
}

module.exports = Queue;
