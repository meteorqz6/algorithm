import sys
input = sys.stdin.readline

N, M = map(int, input().split())
d = {}

for _ in range(N):
  word = input().rstrip()

  if len(word) < M:
    continue
  if word in d:
    d[word] += 1
  else:
    d[word] = 1

d = sorted(d.items(), key = lambda x : (-x[1], -len(x[0]), x[0]))

for i in d:
  print(i[0])