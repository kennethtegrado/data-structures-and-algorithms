var flatten = function (head) {
    if (!head) return null;
    let current = head;

    while (current) {
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
