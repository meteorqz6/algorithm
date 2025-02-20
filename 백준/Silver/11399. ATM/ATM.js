const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(num => parseInt(num, 10));
arr.sort((a, b) => a - b);

let cumulativeSum = [];
arr.reduce((acc, cur) => {
    let sum = acc + cur;
    cumulativeSum.push(sum);
    return sum;
}, 0);

// console.log(cumulativeSum);

let sum = cumulativeSum.reduce((acc, cur) => acc + cur, 0);
console.log(sum);