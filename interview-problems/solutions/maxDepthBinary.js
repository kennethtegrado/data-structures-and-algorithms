const maxDepth = function (node, currentDepth) {
    if (!node) return currentDepth;

    currentDepth++;

    return Math.max(maxDepth(node.left), maxDepth(node.right));
};
