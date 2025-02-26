const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const nArr = input[1].split(' ').map(Number);
const mArr = input[3].split(' ').map(Number);
const nSet = new Set(nArr);

let result = [];

for (let i = 0; i < mArr.length; i++) {
    if (nSet.has(mArr[i])) {
        result.push(1);
    }
    else {
        result.push(0);
    }
};

console.log(result.join('\n'));