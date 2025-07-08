import sys

input = sys.stdin.readline
N = int(input().strip())
info = list(map(int, input().strip().split()))
people = []

for height in range(1, N + 1):
  people.append((height, info[height - 1]))

people.sort(reverse=True) # 키 큰 사람부터 정렬

result = []
for height, count in people:
  result.insert(count, height)

print(' '.join(map(str, result)))

