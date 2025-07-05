import sys
N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()
result = arr[N-1] - arr[0]
for i in range(N-1):
  result += arr[i+1] - arr[i]
print(result)
