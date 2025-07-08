import sys

input = sys.stdin.readline
N = int(input().strip())
nums = list(map(int, input().strip().split()))
operators = list(map(int, input().strip().split()))

max_result = -1000000000
min_result = 1000000000

def dfs(n, temp):
  global max_result, min_result

  if n == N - 1:
    max_result = max(temp, max_result)
    min_result = min(temp, min_result)
    return
  
  if operators[0] > 0:
    operators[0] -= 1
    dfs(n + 1, temp + nums[n + 1])
    operators[0] += 1

  if operators[1] > 0:
    operators[1] -= 1
    dfs(n + 1, temp - nums[n + 1])
    operators[1] += 1

  if operators[2] > 0:
    operators[2] -= 1
    dfs(n + 1, temp * nums[n + 1])
    operators[2] += 1

  if operators[3] > 0:
    operators[3] -= 1
    dfs(n + 1, int(temp / nums[n + 1]))
    operators[3] += 1

dfs(0, nums[0])
print(max_result)
print(min_result)