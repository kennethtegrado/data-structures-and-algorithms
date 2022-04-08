# Insertion Sort

An efficient algorithm for sorting a small number of elements. Insertion sort works the way many people sort a hand of playing cards.

## Process

-   We start with an empty left hand and the cards face down on the table.
-   We then remove one card at a time from the table and insert it into the correct position in the left hand.
-   To find the correct position for a card, we compare it with each of the cards already in the hand, from right to left.
-   At all times, the cards on the left hand are sorted.

## Pseudocode

```
// 0 index basing

for i = 1 to A.length - 1
	key = A[i]


	// Insert A[j] into the sorted sequence A[1..j-1]
	i = j - 1

	for j = i to 1
		if A[j] < A[j-1]
			A[j] = A[j-1]
			A[j-1] = key
```

## Video Explanation

[Check this video for more](https://youtu.be/JU767SDMDvA).

## Analysis

The time taken by insertion sort depends on the input. Sorting thousand numbers takes longer than sorting three numbers. Moreover, INSERTION-SORT can take different amounts of time to sort two input sequences of the same size depending on how nearly sorted they already are.

**Best Case Scenario**
Insertion sort is best used when we already have a sorted array. It only takes a linear function (T(n)) for the running time of an array to sort it.

> T(n) = a(n) + b

**Worst Case Scenario**
Insertion sort is not an ideal choice of algorithm if we are already dealing with an array that is in reverse order. The running time of insertion sort on a reversed array is quadratic function.

> T(n) = a(n^2) + b(n) + c

## Order of Growth

| Best Case | Worst Case |
| --------- | ---------- |
| O(n)      | O(n^2)     |

## JavaScript Implementation

[Click this link to check the javascript file](javascript/Insertion.js).

```javascript
const Insertion = (array) => {
    for (let iteration = 1; iteration < array.length; iteration++) {
        // GET THE CURRENT KEY VALUE

        const currentKeyValue = array[iteration];

        // INSERTION SORT

        for (
            let sortingIterator = iteration;
            sortingIterator > 0;
            sortingIterator--
        ) {
            // GUARD CLAUSE

            if (!(currentKeyValue < array[sortingIterator - 1])) break;

            // SWAPPING

            array[sortingIterator] = array[sortingIterator - 1];

            array[sortingIterator - 1] = currentKeyValue;
        }
    }

    return array;
};
```
