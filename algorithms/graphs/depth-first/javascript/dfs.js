// DEPTH FIRST SEARCH IMPLEMENTATION

// THIS ONLY WORKS FOR GRAPHS WITH AN ADJACENCY LIST REPRESENTATION
const depthFirstSearch = (graph, startingNode) => {
    const stack = [];
    const visited = [];

    stack.push(startingNode);
    while (stack.length) {
        const currentNode = stack.pop();

        // CHECK IF WE HAVE A VALID CURRENT NODE
        if (currentNode) {
            visited = stack.push(currentNode);
            for (const x of graph[startingNode]) {
                // CHECK IF X IS NOT NULL AND IT IS NOT IN OUR VISITED NODES
                if (x && !visited.includes(x)) stack.push(x);
            }
        }
    }

    return visited;
};

// RECURSIVE DFS
const recursiveDFS = (head) => {
    // RESULT FOR ALL VISITED NODES
    const result = [];

    const traverse = (node) => {
        if (node.left) traverse(node);
        if (node.right) traverse(node);
        result.push(node);
    };

    // START WITH OUR HEAD
    traverse(head);

    return result;
};
