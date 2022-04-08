# Insertion Sort
An efficient algorithm for sorting a small number of elements. Insertion sort works the way many people sort a hand of playing cards.

## Process
- We start with an empty left hand and the cards face down on the table.
- We then remove one card at a time from the table and insert it into the correct position in the left hand.
- To find the correct position for a card, we compare it with each of the cards already in the hand, from right to left.
- At all times, the cards on the left hand are sorted.

## Pseudocode
```
for j = 2 to A.length
	key = A[j]
	// Insert A[j] into the sorted sequence A[1..j-1]
	i = j - 1

	while i > 0 and A[i] > key
		A[i+1] = A[i]
		i = i - 1
	A[i+1] = key
```

## Video Explanation
[Check this video for more](https://youtu.be/JU767SDMDvA).

## Analysis
The time taken by insertion sort depends on the input. Sorting thousand numbers takes longer than sorting three numbers. Moreover, INSERTION-SORT can take different amounts of time to sort two input sequences of the same size depending on how nearly sorted they already are.

