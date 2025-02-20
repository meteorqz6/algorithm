const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);

let dp = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[N]);

// dp[9] - dp[8] + 1 : 4 vs dp[3] + 1 : 2
// dp[10] - dp[9] + 1 : 3 vs dp[5] + 1: 4