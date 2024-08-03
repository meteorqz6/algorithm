const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split(' ');

console.log(input === '' ? 0 : arr.length);
