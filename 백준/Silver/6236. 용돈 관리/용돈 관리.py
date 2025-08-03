import sys

input = sys.stdin.readline

N, M = map(int, input().split())
list = []
for _ in range(N):
  list.append(int(input()))

# [100, 400, 300, 100, 500, 101, 400]

start, end = max(list), sum(list)

while start <= end:
  mid = (start + end) // 2
  withdrawal = mid
  cnt = 1
  for i in list:
    if withdrawal - i < 0:
      cnt += 1
      withdrawal = mid
    withdrawal -= i
  if cnt > M:
    start = mid + 1
  else:
    end = mid - 1
    
print(mid)