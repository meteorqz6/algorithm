const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
    arr.push(Number(input[i]));
}

// n = 1 1가지
// n = 2 1+1 2 2가지
// n = 3 1+1+1 1+2 2+1 3 4가지

const dp = new Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

function solution(arr) {
    return arr.map(n => dp[n]).join('\n');
}

console.log(solution(arr));