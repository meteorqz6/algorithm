import sys

input = sys.stdin.readline

a, b = map(int, input().split())
# a = 100
# b = 40021
result = 0

while True:
		if (b % 10 == 1):
				b //= 10
				result += 1
		elif (b % 2 == 0):
				b //= 2
				result += 1
		else:
				result = -1
				break
		
		if (a == b):
			break
		elif (a > b):
			result = -1
			break

if (result != -1): print(result + 1)
else: print(result)

# 42 -> 21 -> 2
# 43