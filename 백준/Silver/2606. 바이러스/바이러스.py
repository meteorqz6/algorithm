import sys

input = sys.stdin.readline

n = int(input())
m = int(input())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

visited = [False] * (n + 1)

def dfs(node):

  visited[node] = True
  count = 1 
  
  for neighbor in graph[node]:
    if not visited[neighbor]:
      count += dfs(neighbor)
      
  return count

result = dfs(1) - 1
print(result)