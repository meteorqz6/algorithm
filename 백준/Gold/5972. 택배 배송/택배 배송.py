import heapq

v,e=map(int,input().split())
graph=[[]for _ in range(v+1)]
dis=[1e9]*(v+1)
for i in range(e):
    v1,v2,e=map(int,input().split())
    graph[v1].append([v2,e])
    graph[v2].append([v1,e])
    
def dijkstra(start):
    q=[]
    heapq.heappush(q,(0,start))
    dis[start]=0
    
    while q:
        distance,node=heapq.heappop(q)
        if distance>dis[node]:continue
        
        for next in graph[node]:
            new_cost=next[1]+dis[node]
            if new_cost<dis[next[0]]:
                dis[next[0]]=new_cost
                heapq.heappush(q,(new_cost,next[0]))

dijkstra(1)

print(dis[v])