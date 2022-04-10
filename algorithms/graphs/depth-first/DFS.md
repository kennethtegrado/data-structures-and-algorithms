# Depth First Search

The most fundamental search algorithm used to explore nodes and edges of a graph. It runs with a time complexity of `O(V+E)` and is often used as a building block in other algorithms.

> By itself, it isn't that useful, when augments to perform other tasks such as count connected components, determine connectivity, or find bridges/articulation points then **DFS REALLY SHINES**

# Pseudocode
```
n = number of nodes in the graph
g = adjacency list representing graph

visited = [false,..., false] # size of n

function dfs(at):
	if visited[at]: return
	visited[at] = true

	neighbours = graph[at]
	for next in neighbours:
		dfs(next)

start_node = 0
dfs(start_node)
```

## Problems to solve with DFS
### Connected Graph Components
**Pseudocode**
```
n = number of nodes in the graph
g = adjacency list representing graph
count = 0
components = []
visited = [false,..., false] # size of n

function findComponents():
	for (i = 0; i < n; i++):
		if !visited[i]:
			count++
			dfs(i)
	return (count, components)

function dfs(at):
	visited[at] = true
	components[at] = count
	
	for (next : g[at]):
		if !visited[next]L
			dfs(next)

start_node = 0
dfs(start_node)
```
