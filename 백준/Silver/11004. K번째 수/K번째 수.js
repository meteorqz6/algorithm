const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
console.log(arr[K - 1]);