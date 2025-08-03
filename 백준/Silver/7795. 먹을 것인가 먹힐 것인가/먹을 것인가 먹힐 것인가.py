import sys

input = sys.stdin.readline

T = int(input())

for _ in range(T):
  A, B = map(int, input().split())
  list_A = list(map(int, input().split()))
  list_B = list(map(int, input().split()))
  list_A.sort()
  list_B.sort()

  cnt = 0
  for a in list_A:
    start, end = 0, B - 1

    while start <= end:
      mid = (start + end) // 2

      if list_B[mid] < a:
        start = mid + 1
      else:
        end = mid - 1
    cnt += start
  
  print(cnt)