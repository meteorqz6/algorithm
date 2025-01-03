const fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let arr = Array(101).fill(0).map(() => (Array(101).fill(0)));
let n = Number(input[0]);
let result = 0;

for (let i = 1; i <= n; i++) {
    let x = Number(input[i].split(' ')[0]);
    let y = Number(input[i].split(' ')[1]);

    for (let j = x; j < x + 10; j++) {
        for (let k = y; k < y + 10; k++) {
            arr[j][k]++;
        }
    }
}

for (let i = 0; i < 101; i++) {
    for (let j = 0; j < 101; j++) {
        if (arr[i][j] >= 1) {
            result++;
        }
    }
}

console.log(result);