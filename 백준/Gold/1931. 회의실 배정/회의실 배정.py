import sys

input = sys.stdin.readline

N = int(input())
result = 0
arr = []

for i in range(N):
    arr.append(list(map(int, input().split())))

arr.sort()
temp = arr[0]

for i in range(1, N):
    if temp[1] > arr[i][1]:
        temp = arr[i]
    elif temp[1] <= arr[i][0]:
        result += 1
        temp = arr[i]

result += 1
print(result)