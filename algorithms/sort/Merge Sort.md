# Merge Sort

## Process

1. Divide the n-element sequence to be sorted into two subsequences of n/2 elements each
2. Sort the two subsequences recursively using merge sort.
3. Merge the two sorted subsequences to produce the sorted answer.

The recursion "bottoms out" when the sequence to be sorted has length 1, in which case there is no work to be done, since every sequence of length 1 is already in sorted order.

> The key operation of the merge sort algorithm is the merging of two sorted sequences in the "combine" step.

Merge sort can be done in the form of a function `MERGE(A, p, q, r)`, where A is an array and p, q, and r are indices into the array such that p <= q < r. The procedure assumes that the subarrays A[p..q] and A[q+1..r] are in sorted order. It merges them to form a single sorted subarray that replaces the current subarray A[p...r].

## Pseudocode

```
n1 = q - p + 1
n2 = r - q

let Left[1..n1+1] and Right[1..n2+1] be new arrays

for i = 1 to n1
	Left[i] = A[p+i-1]
for j = 1 to n2
	Right[j] = A[q+j]

Left[n1+1] = infinity
Right[n2+1] = infinity

for k = p to r
	if L[i] <= R[j]
		A[k] = L[i]
		i = i + 1
	else A[k] = R[j]
		j = j + 1
```

## Video Explanation

[Click this link for an explanation](https://youtu.be/4VqmGXwpLqc).

## Order of Growth

| Best Case | Worst Case |
| --------- | ---------- |
|           | O(nlogn)   |

## Analysis of Merge Sort

## JavaScript Implementation

```javascript
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

// CALL
MergeSort([]);
```
