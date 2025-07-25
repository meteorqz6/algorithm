import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
  n = int(input())
  heights = list(map(int, input().split()))
  heights.sort()

  max_level = 0
  for i in range(2, n):
    max_level = max(max_level, heights[i] - heights[i - 2])
  
  print(max_level)