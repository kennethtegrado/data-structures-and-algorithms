# Coding Interviews

# Patterns to Study

-   Using Hash Tables to record our value
-   Shifting Pointers

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

So my girlfriend tells me that she is there for my problems, and I should vent out my problems. So I did, as I was feeling super down (becomes a normal reoccurrence in my life and I hate it). As I was ranting, she told me that I should stop as it was too heavy for her, and “nakakasawa” na problems ko for her, she even cursed at me for being redundant with my problems.
Fast forward a couple of weeks later she told me that she was sorry for outbursting because she was just angry that she could not do anything about it, and told me that I could share my problems with her again.
Reluctant, but I did share my problems with her again. A few weeks she was caring and listening to me very well, but a couple of weeks ago she became very much similar to what happened back in the past as she was becoming more and more uninterested. There was this one time where I was again feeling down, she told me I could tell her my problems but after a few minutes I learned she was playing a video game and actually asked help from me for that video game and never went back to asking if I was okay or not.
I just feel like I am too much for her? Am I? I try to understand her and keep her out of my problems even if she does tell me to share, but with what happened in the past, I usually just keep to myself and not share my problems all that much. I am too tired to just keep all my problems to myself, but she even told me that I shouldn’t do that but when I do share with her she just writes me off. I don’t know what to do. Maybe I am too worked up and emotions are going wild?
