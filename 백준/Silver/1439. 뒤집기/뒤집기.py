import sys
arr = list(map(str, sys.stdin.readline().strip()))
stack = []
zero_cnt = 0
one_cnt = 0

for i in range(len(arr)):
  if stack == []:
    stack.append(arr[i])
    
  elif stack[-1] != arr[i]:
    stack.append(arr[i])

for i in range(len(stack)):
  if stack[i] == '0':
    zero_cnt += 1
  else:
    one_cnt += 1

print(min(zero_cnt, one_cnt))