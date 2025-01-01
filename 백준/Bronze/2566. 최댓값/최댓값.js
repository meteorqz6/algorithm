const fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let arr = Array(9).fill(0).map(() => (Array(9).fill(0)));
// console.log(arr);
let max = -1;
let row;
let column;

for (let i = 0; i < 9; i++) {
    let nArr = input[i].split(' ').map(Number);
    for (let j = 0; j < 9; j++) {
        arr[i][j] = nArr[j];
        if (nArr[j] > max) {
            max = nArr[j];
            row = i + 1;
            column = j + 1;
        }
    }
}

console.log(max);
console.log(row, column);