import sys

input = sys.stdin.readline
N, M = map(int, input().strip().split())
grid = [input().strip() for _ in range(N)]

max_area = 1

for i in range(N):
  for j in range(M):
    for d in range(1, min(N, M)):
      ni, nj = i + d, j + d
      if ni < N and nj < M:
        if grid[i][j] == grid[i][nj] == grid[ni][j] == grid[ni][nj]:
          max_area = max(max_area, (d + 1) **2)

print(max_area)