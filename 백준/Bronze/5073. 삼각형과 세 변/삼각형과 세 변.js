const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = [];

for (let i = 0; i < input.length - 1; i++) {
    let arr = input[i].split(' ').map(Number);
    arr.sort((a, b) => a - b);

    if (arr[0] + arr[1] <= arr[2]) {
        result.push('Invalid');
    } else {
        if (arr[0] == arr[1] && arr[1] == arr[2]) {
            result.push('Equilateral');
        }
        else if (arr[0] == arr[1] || arr[1] == arr[2] || arr[0] == arr[2]) {
            result.push('Isosceles');
        }
        else {
            result.push('Scalene');
        }
    }
}

console.log(result.join('\n'));