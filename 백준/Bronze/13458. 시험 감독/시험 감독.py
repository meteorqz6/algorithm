import sys

input = sys.stdin.readline

N = int(input())
n = list(map(int, input().split()))
B, C = map(int, input().split())

result = 0

for i in range(N):
    n[i] -= B
    result += 1
    if n[i] > 0:
        if n[i] % C == 0:
            result += n[i] // C
        else:
            result += n[i] // C + 1

print(result)