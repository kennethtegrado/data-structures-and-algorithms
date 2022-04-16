var flatten = function (head) {
    // CHECK IF WE HAVE A HEAD NODE
    if (!head) return null;
    let current = head;

    while (current) {
        // IF WE DO NOT HAVE A CHILD THEN WE JUST NEED TO MOVE CURRENT
        if (!current.child) {
            current = current.next;
        } else {
            let tail = current.child;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = current.next;
            if (tail.next) {
                tail.next.prev = tail;
            }
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }
    }

    return head;
};

const remake = function (head) {
    if (!head) return head;
    let current = head;

    while (current) {
        if (!current.child) current = current.next;
        // DO NOT MOVE THE POINTERS TO NEXT NODE
        else {
            let tail = current.child;

            while (tail.next) tail = tail.next;

            tail.next = current.next;

            if (tail.next) tail.next.prev = tail;

            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }
    }

    return head;
};
