import sys

input = sys.stdin.readline
T = int(input().strip())

for t in range(T):
  N = int(input().strip())
  arr = []

  for i in range(N):
      doc, interview = map(int, input().strip().split())
      arr.append((doc, interview))

  arr.sort()
  result = 1

  best_interview = arr[0][1]

  for i in range(1, N):
      if arr[i][1] < best_interview:
        result += 1
        best_interview = arr[i][1]

  print(result)

