# Breadth First Search
Is another fundamental search algorithm used to explore nodes and edges of a graph. It runs with a time complexity of O(V+E) and is often used as a building block in other algorithms.

> It is very useful for finding the shortest path on unweighted graphs.

# Pseudocode
```
n = number of nodes in the graph
g = adjacency list representing unweighted graph

// s - start node, e = end node

function solve(s):
	q = [] // queue
	q.enqueue(s)

	visited = [false, ..., false] # size of n
	visited[s] = true

	prev = [null, ..., null] # size n

	while !q.isEmpty():
		node = q.dequeue()
		neighbours = g.get(node)

		for (next: neighbours):
			if !visited[next]:
				q.enqueue(next)
				visited[next] = true
				prev[next] = node
	return prev

function reconstructPaths(s, e, prev):
	path = []
	for (at = e; at != null; at = prev[at]):
		path.add(at)
	path.reverse()

	if path[0] == s:
		return path

	return []

function bfs(s,e):

	// do a bfs starting at node s
	prev = solve(s)

	// return reconstructed path from s ->  e
	return reconstructPath(s, e, prev)
```

# Shortest Path with BFS
