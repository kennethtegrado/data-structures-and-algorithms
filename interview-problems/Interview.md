# Coding Interviews

# Patterns to Study

-   Hash Table to Find Value
-   [Shifting Pointers](https://youtu.be/4YKBwKnTnlM)
-   Sliding Window
    -   Form a window over some portion of sequential data, then move that window throughout the data to capture different parts of it.
-   Subproblems
    -   A problem that we have to solve along the way to solving the main problem

---

# Array Problem Samples

## Two Sums (easy)

Given an array of integers, return the indices of the two numbers that add up to a given target.

This means that we are expecting two arguments, the first one is an array that contains integers. The second argument is the target sum that we are looking for. At the same time, we must return the indices of the two numbers that add up to our target contained in an array.

**STEP 1**
Verify the constraints:

-   Are all the numbers positive or can there be negatives?
    -   All integers are positive
-   Are there duplicate numbers in the array?
    -   There are no duplicates in our array
-   Will there always be solution available?
    -   There are instances where there are no solution
-   What do we return if there's no solution?
    -   Just return null
-   Can there be multiple pairs that add up to the target?
    -   No, only 1 pair of numbers will add up to the target.

**STEP 2**
Write out some test cases:

-   [1,3,7,9,2] target = 11
    -   Answer = [3,4]
-   [1,3,7,9,2] target = 25
    -   Answer = null
-   [] target = 1
    -   Answer = null
-   [5] target = 5
    -   Answer = null
-   [1,6] target = 7
    -   Answer = [0,1]

**STEP 3**
Figure out a solution without code

-   I'll pick one element on our array first.
-   I'll also check every element that is not the first element that I currently checked and check if their sum equates to our target.
-   Do this for every element until we find a sum that is equal to our target.
-   If all our elements do not have a pair that is equal to our target then we return null.

> We can use the two pointer technique to solve this problem. Our first pointer will be the one who will stay at the first element that we chose. The second pointer will iterate every element in our array and check if the value on our first poniter

**STEP 4**
Convert logic to a working program

**STEP 5**
Test programs on test cases

**STEP 6**
Analyzing Space and Time Complexity

-   For every n elements we are iterating each of these elements by n. Hence the time complexity of our current solution is O(n^2)
-   For the space that our solution uses, it utilizes O(1) because it only uses constant space of memory from the array.

### Solution

**Javascript**
[Check out the JavaScript Solution](solutions/twoSum.js)

## Container with Most Water (medium)

You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

**STEP 1**
Verify the constraints

-   Are all the heights positive?
    -   Yes all the heights are positive
-   What do we return if there is only one height or there are no elements in our array?
    -   Return 0
-   Does the thickness of the lines affect the area?
    -   No, they take no space.
-   Do the left and right sides of the graph count as walls?
    -   No, the sides cannot be used to form a container
-   Does a higher line inside our container affect our area?
    -   No the lines inside a container don't affect the area.

**STEP 2**
Creating Test Cases

-   [7,1,2,3,9]
    -   28
-   []
    -   0
-   [7]
    -   0
-   [6,9,3,4,5,8]
    -   32

**STEP 3**
Figuring out a solution without a code

-   We check every every element and their containers to get the max value
-   Check if our max is actually less than the value of the area of current container, if it is then change the max

**STEP 4**
Convert our logic to a working program

**STEP 5**
Test our code to our test cases

**STEP 6**
Analyzing Space and Time Complexity

### Solution

**JavaScript**
[Check out the JavaScript Solution](solutions/containerWithMostArea.js)

## Trapping Rainwater (hard)

Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.

**STEP 1**
Verify the constraints

-   Do the left and right sides of the graph count as walls?
    -   No, the sides are not walls.
-   Will there be negative integers?
    -   No, assume all integers are positive

**STEP 2**
Create Test Cases

-   [0,1,0,2,1,0,3,1,0,1,2]
    -   Answer is 8
-   []
    -   Answer is 0
-   [3]
    -   Answer is 0
-   [3,4,3]
    -   Answer is 0

**STEP 3**
Writing our logic

### Solution

**JavaScript**
[Check out the JavaScript Solution](solutions/trappingRainwater.js)

# String Problem Samples

## Backspace String Compare (easy)

Given two strings S and T, return if theyy equal when both are typed out. Any '#' that appears in the strings counts as backspace.

**STEP 1**
Verify the constraints

-   What happens when two #'s appear beside each other?
    -   Delete the two values before the first #.
-   What happens to # when there is no character to remove?
    -   It deletes nothing then, just like backspace would.
-   Are two empty strings equal to each other?
    -   Yes, consider two empty strings as equal.
-   Does case sensitivity matter?
    -   Yes it does, "a" does not equal "A".

**STEP 2**
Writing some test cases

-   "ab#z" "az#z"
    -   True
-   "abc#d" "acc#c"
    -   False
-   "ab##" "x#c1##"
    -   True
-   "a###b" "b"
    -   True
-   "A" "a"
    -   False

**STEP 3**
Writing a logic

-   We iterate every element in our string, whenever we found a backspace then we remove the previous element.
-   Compare the elements in our two strings.

### Solution

[Check out this JavaScript Solution](solutions/typedOutString.js)

## Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

**STEP 1**
Verify Constraints

-   Is the substring contiguous?
    -   Yes look for a substring not a subsequence.
    -   `A substring is a smaller part of an element that are sequential, while subsequence means that they can also be not contiguous as long as they are part of the array/string`
-   Does case sensitivity matter?
    -   No, assume all the strings are in lower case.

**STEP 2**
Creating Test Cases

-   "abccabb"
    -   3
-   "ccccc"
    -   1
-   ""
    -   0

**UTILIZING SLIDING WINDOW TECHNIQUE**

-   Use a sliding window to represent the current substring
-   The size of the window will change based on new characters, and characters we've already seen before.
-   Our seen characters hashmap keeps track of what characters we've seen, and the index we saw them at.

### Solution

[Check out this solution](solutions/lengthOfLongestSubstring.js)

# Linked Lists Problems

# Reverse a Linked Lists

Given a single linked list, we reverse the pointers of every node

**STEP 1**
Verifying Constraints

-   What do we return if we get null or a single node?
    -   Just return null and the node back respectively

**STEP 2**
Creating Test Cases

-   [1,2,3,4,5]
    -   [5,4,3,2,1]
-   []
    -   []
-   [3]
    -   [3]

**STEP 3**
Developing the logic

-   Reverse all the pointers from the head to the tail

## M, N Reversals (Medium)

Given a linked list and numbers m and n, return it back with only positions m to n in reverse.

**STEP 1**
Verify the constraints

-   Will m and n always be within the bounds of the linked list?
    -   Yes, assume 1 <= m <= n <= length of linked list.
-   Can we receive m and n values for the whole linked list?
    -   Yes, we can receive m = 1 and n = length of linked list

**STEP 2**
Writing out some test cases

-   [1,2,3,4,5] 2, 4
    -   [1,4,3,2,5]
-   [1,2,3,4,5] 1, 5
    -   [5,4,3,2,1]
-   [5] 1 1
    -   [5]
-   null 0 0
    -   null

### Solution

[Check out this JavaScript Solution](solutions/reverseBetween.js)

## Flatten a Multilevel Doubly Linked List

Given a doubly linekd list, list nodes also have a child property that can point to a separate doubly linked list. These child lists can also have one or more child doubly linked lists of their own, and so on.

Return the list as a single level flattened doubly linked list.

**STEP 1**
Verify Constraints

-   Can a doubly linked list have multiple child list nodes?
    -   Yes, every list node can have multiple levels of children.
-   What do we do with child properties after flattening?
    -   Just set it to null

**STEP 2**
Creating Test Cases

-   Too hard to type
