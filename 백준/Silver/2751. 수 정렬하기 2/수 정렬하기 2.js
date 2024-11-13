const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let uniqueArr = [...new Set(arr)];
let result = uniqueArr.sort((a, b) => a - b);
console.log(result.join('\n'));