const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);

function getPrimes(M, N) {
    const arr = Array(N + 1).fill(true);
    arr[0] = arr[1] = false;

    for (let i = 2; i * i <= N; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= N; j += i) {
                arr[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = M; i <= N; i++) {
        if (arr[i]) primes.push(i);
    }
    return primes;
}

console.log(getPrimes(M, N).join('\n'));

