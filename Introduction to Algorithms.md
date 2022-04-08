# Algorithms

## Insertion Sort
Insertion sort is an efficient algorithm for sorting smaller number of elements and the best way to sort a sorted array.

**[Check this link to see the full analysis](algorithms/sort/Insertion%20Sort.md)**

**Obsidian Shortcut**
[[Insertion Sort]]


## Analyzing Algorithms

**Analyzing** an algorithm has come to mean predicting the resources that the algorithm requires. Occasionally, resources such as memory, communication bandwith, or computer hardware are of primary concern, but most often it is computational time that we want to measure.


## Designing Algorithms
There are a variety of ways to develop an algorithm. These ways follow a technique known that are called as **algorithm design techniques**.

### Incremental Technique

### The Divide and Conquer Approach
Many useful algorithms are recursive in structure. In order to solve problems, some algorithms call themselves recursively one or more times to deal with closely related sub-problems. This technique is known as **divide and conquer**, algorithm break the problem into several subproblems that are similar to the original problem but smaller in size, solve the problems recursively, and then combine these solutions to create a solution to the original problem.

**Steps**
1. **Divide** the problem into a number of subproblems that are smaller instances of the same problem.
2. **Conquer** the subproblems by solving them recursively. If the subproblem sizes are small enough, however, just solve the subproblems in a straighforward manner.
3. **Combine** the solutions to the subproblems into the solution for the original problem.

**Example:**
## Merge Sort
Is an algorithm that follows the principle of divide and conquer.

**[Check this link to see the full analysis](algorithms/sort/Merge%20Sort.md)**

Obsidian Shortcut:
[[Merge Sort]]

## Growth of Functions
Defined as the **order of growth** of the running time of an algorithm, that gives a simple characterization of the algorithm's efficient and also allows us to compare the relative performance and alternative algorithms.

When we look at input sizes large enough to make only the order of growth of the running time relevant, we are studying the ***asymptotic*** efficiency of algorithms.

### Asymptotic Notation
The notations we use to descriibe the asymptotic running time of an algorithm are defined in terms of functions whose domains are the set of natural nubmers. Such notations are convenient for describing the worst-case running-time function T(n), which usually is defined only on integer input sizes. 