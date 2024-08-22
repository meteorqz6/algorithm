const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0]); // 배열 길이
let arrA = [];
let arrB = [];
let sum = 0;

for(let i = 0; i < n ; i++ ){
    arrA.push(parseInt(input[1].split(' ')[i]));
    arrB.push(parseInt(input[2].split(' ')[i]));
}
arrA.sort((a,b) => a - b);
arrB.sort((a,b) => b - a);

for(let i = 0; i < n; i++ ){
    sum += arrA[i]*arrB[i];
}

console.log(sum);
