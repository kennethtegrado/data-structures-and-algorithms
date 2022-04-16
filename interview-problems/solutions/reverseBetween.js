// SOLUTION
const reverseBetween = function (head, left, right) {
    let currentPos = 1,
        currentNode = head,
        start = head;

    while (currentPos < left) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let prev = null,
        tail = currentNode;

    // SWAPPING THE POINTERS
    while ((currentPos >= left) & (currentPos <= right)) {
        const next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
        currentPos++;
    }

    // UPDATING THE VALUES OF TAIL AND START
    start.next = prev;
    tail.next = currentNode;

    if (left > 1) return head;
    else return prev;
};
