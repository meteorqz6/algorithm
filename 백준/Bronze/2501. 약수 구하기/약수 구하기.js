const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
const n = Number(input[0]);
const k = Number(input[1]);

function solution1(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

function solution2(arr, k) {
    if (arr.length < k) {
        return 0;
    }
    else {
        return arr[k - 1];
    }
}

console.log(solution2(solution1(n), k));