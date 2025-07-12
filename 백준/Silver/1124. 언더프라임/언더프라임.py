import sys
input = sys.stdin.readline

a, b = map(int, input().strip().split())
is_prime = [1 for i in range(100001)]
primes = []
is_prime[0:1] = 0, 0


def prime_checker():
    for i in range(2, 100000):
        if is_prime[i] == 1:
            primes.append(i)
            temp, length = i + i, len(is_prime)
            while length > temp:
                is_prime[temp] = 0
                temp += i


def check_under_prime(a, b):
    prime_checker()

    res = 0
    for i in range(a, b + 1):
        cnt, idx = 0, 0
        while 1:
            if i % primes[idx] == 0:
                cnt += 1
                i //= primes[idx]

                if i == 1:
                    break
            else:
                idx += 1
        if is_prime[cnt] == 1:
            res += 1

    return res


print(check_under_prime(a, b))