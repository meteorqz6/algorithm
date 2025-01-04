const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let a = Math.pow(2, n);
console.log((a + 1) * (a + 1));