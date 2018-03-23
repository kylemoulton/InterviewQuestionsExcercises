// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counts = [0];
    let vals = [root, 'end'];
    while (vals.length > 1) {
        let currentNode = vals.shift();
        
        if (currentNode === 'end') {
            vals.push(currentNode);
            counts.push(0);
        } else {
            vals.push(...currentNode.children);
            counts[counts.length - 1]++;
        }
    }

    return counts;
}

module.exports = levelWidth;
