# 하 -> 우 -> 상 -> 좌 순서로 이동
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def print_arr(arr):
  for row in arr:
    print(' '.join(map(str, row)))

n = int(input())
target = int(input())

arr = [[0] * n for _ in range(n)]

num = n * n # 가장 큰 수부터 채우기
x, y, d = 0, 0, 0
target_x, target_y = 0, 0

while num > 0:
  arr[x][y] = num

  if num == target:
    result_x = x + 1
    result_y = y + 1
  
  num -= 1

  nx = x + dx[d]
  ny = y + dy[d]

  if nx < 0 or nx >= n or ny < 0 or ny >= n or arr[nx][ny] != 0:
    d = (d + 1) % 4
    nx = x + dx[d]
    ny = y + dy[d]

  x, y = nx, ny


print_arr(arr)
print(result_x, result_y)