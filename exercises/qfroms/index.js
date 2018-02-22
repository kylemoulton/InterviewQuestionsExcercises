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
add 1 2 3 4 5
[ ]     [1 2 3 4 5]

[5 4 3 2]   []
remove 1
[]      [2 3 4 5]

[5 4 3]     []
remove 2
[]      [3 4 5]

[]   [3 4 5 6 7 8 9]
add 6 7 8 9


[9 8 7 6 5]  []
remove 3 4 5
[]      [5 6 7 8 9]


[9 8 7]     []
remove 6
[]      [7 8 9]
*/

const Stack = require('./stack');

// Major error, if you remove element from queue (or peek for that matter)
// and then add more to the queue, removing aftwards will only give you the
// first element added after the first remove or peek. Need to re-add all 
// elements back to s1 after a remove or peek.
/*
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
*/

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(val) {
        this.s2.push(val);
    }

    remove() {
        while (this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        const toReturn = this.s1.pop();
        
        while (this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }

        return toReturn;
    }

    peek() {
        while (this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        const toReturn = this.s1.peek();

        while (this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }

        return toReturn;
    }
}

module.exports = Queue;
