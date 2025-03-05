const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let arrX = [];
let arrY = [];
let result = [];

for (let i = 0; i < 3; i++) {
    arrX.push(Number(input[i].split(' ')[0]));
    arrY.push(Number(input[i].split(' ')[1]));
}

let cntX = arrX.reduce((cnt, element) => cnt + (arrX[0] === element), 0);
let cntY = arrY.reduce((cnt, element) => cnt + (arrY[0] === element), 0);

if (cntX === 1) result.push(arrX[0]);
if (cntX === 2 && arrX[1] === arrX[0]) result.push(arrX[2]);
if (cntX === 2 && arrX[2] === arrX[0]) result.push(arrX[1]);

if (cntY === 1) result.push(arrY[0]);
if (cntY === 2 && arrY[1] === arrY[0]) result.push(arrY[2]);
if (cntY === 2 && arrY[2] === arrY[0]) result.push(arrY[1]);

console.log(result.join(' '));
