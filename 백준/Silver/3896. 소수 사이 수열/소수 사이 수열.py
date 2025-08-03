import sys
input = sys.stdin.readline
from bisect import bisect

MAX = 1299710
is_prime = [True] * MAX
primes = []

for i in range(2, MAX):
  if is_prime[i]:
    primes.append(i)
    for j in range (i ** 2, MAX, i):
      is_prime[j] = False

T = int(input())

for _ in range(T):
  k = int(input())

  if is_prime[k]:
    print(0)
  
  else:
    idx = bisect(primes, k)
    print(primes[idx] - primes[idx - 1])


