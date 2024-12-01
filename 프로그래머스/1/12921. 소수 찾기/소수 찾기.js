function solution(n) {
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false; // i의 배수들은 소수가 아님
            }
        }
    }

    return isPrime.filter(Boolean).length; // true 값의 개수를 셈
}
