const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).reverse();
// console.log(arr);
let cnt = 0;
let remaining = K;

for (let i = 0; i < arr.length; i++) {
    if (remaining === 0) break;
    if (arr[i] > remaining) continue;
    cnt += Math.floor(remaining / arr[i]);
    remaining %= arr[i];
}

console.log(cnt);