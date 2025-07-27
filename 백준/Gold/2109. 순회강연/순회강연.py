import sys
import heapq

input = sys.stdin.readline

n = int(input())
lectures = []
for _ in range(n):
    p, d = map(int, input().split())
    lectures.append((p, d))

lectures.sort(key=lambda x: x[1])

pq = []

for p, d in lectures:
    heapq.heappush(pq, p)
    if len(pq) > d:
        heapq.heappop(pq)

print(sum(pq))