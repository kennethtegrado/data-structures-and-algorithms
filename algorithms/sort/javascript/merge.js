// MERGE SORT IMPLEMENTATION

const MergeSort = (array) => {
    // Base Condition
    if (array.length <= 1) return array;

    // Getting the middle index
    const middle = Math.floor(array.length / 2);

    // Split the array in the left and right
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursive Case
    return merge(MergeSort(left), MergeSort(right));
};

// Combining their values
const merge = (left, right) => {
    const array = [];

    // Check if we still have values from right and left
    while (left.length && right.length) {
        // Check if left is less than right
        if (left[0] < right[0]) array.push(left.shift());
        // Push the right instead
        else array.push(right.shift());
    }

    // RETURNING OUR ARRAY
    return [...array, ...left.slice(), ...right.slice()];
};
