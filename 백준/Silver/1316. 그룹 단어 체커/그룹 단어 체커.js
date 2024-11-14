const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let cnt = n;
// let input = [5, 'ab', 'aa', 'aca', 'ba', 'bb'];
// let cnt = 5;
// let n = 5;
let arr = [];

for (let i = 1; i <= n; i++) {
    let str = input[i];
    arr = [];
    for (let j = 0; j < str.length; j++) {
        if( arr.includes(str[j]) && j != arr.lastIndexOf(str[j]) + 1) {
            cnt -= 1;
            break;
        } else {
            arr.push(str[j]);
        }
    }
}

console.log(cnt);
