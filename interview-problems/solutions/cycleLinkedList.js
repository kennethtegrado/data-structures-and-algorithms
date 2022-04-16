// LEETCODE MEDIUM SOLUTION
const hasCycleMedium = function (head) {
    if (!head) return false;

    let hare = head,
        turtle = head;

    while (true) {
        hare = hare.next;
        turtle = turtle.next;

        if (!hare || !hare.next) return false;
        else hare = hare.next;

        if (turtle === hare) break;
    }

    let p1 = head,
        p2 = turtle;

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
};

// FLOYD'S TORTOISE AND HARE ALGORITHM
const hasCycle = function (head) {
    if (!head) return false;
    let hare = head,
        turtle = head;

    while (true) {
        hare = hare.next;
        turtle = turtle.next;

        if (!hare || !hare.next) return false;
        else hare = hare.next;

        if (turtle === hare) break;
    }
    return true;
};

// SIMPLE SOLUTION
const hasCycleSimple = function (head) {
    if (!head) return false;
    let current = head;
    const seen = new Set();
    while (!seen.has(current)) {
        if (!current.next) return false;

        seen.add(current);
        current = current.next;
    }

    return true;
};
