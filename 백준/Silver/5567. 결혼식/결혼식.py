from sys import stdin
input = stdin.readline 

n = int(input())
m = int(input())

graph = [[] for i in range(n+1)]
invited = [0]*(n+1)

for _ in range(m):
    a,b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in graph[1]:
    invited[i] = 1
    for x in graph[i]:
        invited[x] = 1

if max(invited) == 0:
    print(0)
else:
    print(sum(invited)-1)