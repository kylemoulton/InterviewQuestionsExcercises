// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        let currentNode = this;

        while (currentNode.left || currentNode.right) {            
            if (data < currentNode.data) {
                if (!currentNode.left) {
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        if (data < currentNode.data) {
            currentNode.left = new Node(data);
        } else {
            currentNode.right = new Node(data);
        }

    }

    contains(data) {
        let currentNode = this;

        while (currentNode.left || currentNode.right) {
            if (data === currentNode.data) {
                return currentNode;
            } else if (data < currentNode.data) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    return null;
                }
            } else {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                } else {
                    return null;
                }
            }
        }

        if (data === currentNode.data) {
            return currentNode;
        }

        return null;
    }
}


module.exports = Node;
