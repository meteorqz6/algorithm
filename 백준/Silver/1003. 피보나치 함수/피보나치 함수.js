const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const T = input[0];

function fibonacciCounts(n) {
    let dp = Array.from({ length: 41 }, () => [0, 0]);

    dp[0] = [1, 0];
    dp[1] = [0, 1];

    for (let i = 2; i <= 40; i++) {
        dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
        dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
    }

    return dp[n];
}


for (let i = 1; i <= T; i++) {
    const [count0, count1] = fibonacciCounts(input[i]);
    console.log(count0, count1);
}
