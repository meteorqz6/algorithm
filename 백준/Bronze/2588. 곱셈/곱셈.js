const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n1 = parseInt(input[0]);
const n2 = parseInt(input[1]);
const arr = input[1].split('');
for( let i = 2; i >= 0 ; i-- ){
    console.log(parseInt(arr[i])*n1);
}
console.log(n1*n2);