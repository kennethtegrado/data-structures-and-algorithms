# Coding Interviews

# Problem Samples

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
