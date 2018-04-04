// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

/*
function validate(node, min = null, max = null) {
    if ((!min || (node.data > min)) && (!max || (node.data < max))) {
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
*/

/*
After comparing my solution to the provided solution below, I can't think
of any major reasons why mine should be much less efficient, but mine
is a bit more complex than it needs to be. In the future maybe I should 
try to look for all of the cases where the validate or recurse should 
terminate without another call to validate and implement those first.
*/

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }
    if (min !== null && node.data < min) {
        return false;
    }
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

module.exports = validate;
