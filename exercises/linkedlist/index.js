// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// First Attempt
/*
class Node {
    constructor(data, node) {
        this.data = data;
        this.next = node || null;        
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        if (!this.head) {
            this.head = new Node(data); 
        } else {
            this.head = new Node(data, this.head);
        }
    }

    size() {
        let size = this.head !== null ? 1 : 0;
        let currentNode = this.head;
        while(currentNode !== null && currentNode.next !== null) {
            currentNode = currentNode.next;
            size++;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }
    
    getLast() {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        let currentNode = this.head;
        if (currentNode === null) {
            return;
        } else if (currentNode.next === null) {
            this.head = null;
        } else {
            while (currentNode.next.next !== null) {
                currentNode = currentNode.next;
            }
        }
        currentNode.next = null;
    }

    insertLast(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(data);
        }
    }

    getAt(index) {
        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            if (currentNode !== null) {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    removeAt(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        
        if (currentNode === null) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next || null;
            return;
        }

        while (currentNode !== null && currentIndex < index - 1) {
            currentNode = currentNode.next || null;
            currentIndex++;
        }

        if (currentNode === null) {
            return;
        } else if (currentNode.next !== null) {
            currentNode.next = currentNode.next.next || null;
        }
    }

    insertAt(data, index) {
        if (index === 0) {
            this.head = new Node(data, this.head || null);
            return;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode.next !== null && currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        
        currentNode.next = new Node(data, currentNode.next);
    }

    forEach(fn) {
        let currentNode = this.head;

        while (currentNode) {
            fn(currentNode);
            currentNode = currentNode.next;
        }
    }

    *[Symbol.iterator]() {
        let currentNode = this.head; 
        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}
*/

class Node {
    constructor(data, node) {
        this.data = data;
        this.next = node || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }   

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        // let currentNode = this.head;
        // while (currentNode && currentNode.next) {
        //     currentNode = currentNode.next;
        // }
        // return currentNode;
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        } 
    }

    removeLast() {
        // if (!this.head) {
        //     return;
        // }
        // if (!this.head.next) {
        //     this.head = null;
        //     return;
        // }

        // let previousNode = this.head;
        // let currentNode = this.head.next;

        // while (currentNode.next) {
        //     previousNode = currentNode;
        //     currentNode = currentNode.next;
        // }
        // previousNode.next = null;
        if (this.size() === 0) {
            return;
        } else if (this.size() === 1) {
            this.head = null;
        } else {
            this.getAt(this.size() - 2).next = null;
        }
    }

    insertLast(data) {
        let last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            
            counter++;
            currentNode = currentNode.next;
        }
        return null;
    }

    removeAt(index) {
        if (index > this.size() - 1) {
            return;
        } else if (index === 0) {
            this.head = this.head.next;
        } else {
            const previousNode = this.getAt(index - 1);
            previousNode.next = previousNode.next.next;
        }
    }

    insertAt(data, index) {
        if (this.size() <= index + 1) {
            this.insertLast(data);
        } else if (index === 0) {
            this.head = new Node(data, this.head);
        } 
        else {
            const previousNode = this.getAt(index - 1);
            previousNode.next = new Node(data, previousNode.next);
        }
    }

    forEach(fn) {
        let currentNode = this.head;
        while (currentNode) {
            fn(currentNode);
            currentNode = currentNode.next;
        }
    }

    *[Symbol.iterator]() {
        let currentNode = this.head; 
        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

module.exports = { Node, LinkedList };
