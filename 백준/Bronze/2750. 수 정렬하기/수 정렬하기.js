const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
    arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);
console.log(arr.join('\n'));