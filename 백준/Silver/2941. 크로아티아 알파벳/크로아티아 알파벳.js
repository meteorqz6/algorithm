const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let cnt = 0;

for (let i = 0; i < input.length;) {
    if (input[i] === 'c' && input[i + 1] === '=') {
        cnt += 1;
        i += 2;
    } else if (input[i] === 'c' && input[i + 1] === '-') {
        cnt += 1;
        i += 2;
    } else if (input[i] === 'd' && input[i + 1] === 'z' && input[i + 2] === '=') {
        cnt += 1;
        i += 3;
    } else if (input[i] === 'd' && input[i + 1] === '-') {
        cnt += 1;
        i += 2;
    } else if (input[i] === 'l' && input[i + 1] === 'j') {
        cnt += 1;
        i += 2;
    } else if (input[i] === 'n' && input[i + 1] === 'j') {
        cnt += 1;
        i += 2;
    } else if (input[i] === 's' && input[i + 1] === '=') {
        cnt += 1;
        i += 2;
    } else if (input[i] === 'z' && input[i + 1] === '=') {
        cnt += 1;
        i += 2;
    } else {
        cnt += 1;
        i += 1;
    }
}

console.log(cnt);
