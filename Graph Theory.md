# Graph Theory

is the mathematical theory of the properties and applications of graphs(networks).

## Types of Graphs

## Undirected Graph

graph in which edges have no orientation

### Directed Graphs

graph in which edges have orientations

### Weighted Graphs

graphs where the edges contain a certain value

## Special Graph

### Tree

an undirected graph with no cycle, a connected graph with N nodes and N-1 edges

### Rooted Trees

a tree with a designated root node where every edge either points away from or towards the root node. When edges point away from the root graph it is called an **arborescence (out-tree)** and **anti-arborescence (in-tree)** for its counterpart.

### Directed Acyclic Graphs

![image](images/Pasted%20image%2020220410181827.png)

### Bipartite Graph

![image](images/Pasted%20image%2020220410182418.png)

### Complete Graphs

![image](Pasted%20image%2020220410182648.png)

## Representing Graphs

### Adjacency Matix

![images](Pasted%20image%2020220410182936.png)

**Pros**

-   Space efficient for representing graphs
-   Ege weight lookup is O(1)
-   Simplest graph representation

**Cons**

-   Requires O(v^2) space
-   Iterating over all edges takes O(v^2) time

### Adjacency List

![image](images/Pasted%20image%2020220410183702.png)

**Pros**

-   Space efficient for representing sparse graphs
-   Iterating over all edges is efficient

**Cons**

-   Less space efficient for denser graphs
-   Edge weight lookup is O(E)
-   Slightly more complex graph representation

### Edge List

![image](images/Pasted%20image%2020220410184021.png)

**Pros**

-   Space efficient for representing sparse graphs
-   Iterating over all edges is efficient
-   Very simple structure

**Cons**

-   Less space efficient for denser graphs
-   Edge weight lookup is O(E)
