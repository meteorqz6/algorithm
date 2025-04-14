const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
arr.sort((a,b) => a - b);
const mid = arr[Math.floor((N - 1) / 2)];
console.log(mid);

// const min = arr[0];
// const max = arr[N - 1];
// let min_sum = Number.MAX_SAFE_INTEGER;
// let sum;
// let result;

// for (let i = min; i <= max; i++) {
//     sum = 0;
//     for (let j = 0; j < N; j++) {
//         sum += Math.abs(arr[j] - i);

//     }
//     // console.log(sum);
//     if (sum < min_sum) {
//         min_sum = sum;
//         result = i;
//     }
// }
// console.log(result);
