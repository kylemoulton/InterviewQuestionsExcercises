// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent


function validate(node, min = null, max = null) {
    if (((node.data > min) || !min) && ((node.data < max) || !max)) {
        if (!node.left && !node.right) {
            return true;
        } else if (!node.right) {
            return validate(node.left, min, node.data);
        } else if (!node.left) {
            return validate(node.right, node.data, max);
        } else {
            return (validate(node.left, min, node.data) && validate(node.right, node.data, max));
        }
    } else {
        return false;
    }
}

module.exports = validate;
