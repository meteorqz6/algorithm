import sys
input = sys.stdin.readline

N = int(input().strip())
distance = list(map(int, input().strip().split()))
price = list(map(int, input().strip().split()))

result = 0
min_price = price[0]

for i in range(N - 1):
    if price[i] < min_price:
        min_price = price[i]
    result += min_price * distance[i]

print(result)
