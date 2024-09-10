const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const A = parseInt(input[0].split(' ')[0]);
const B = parseInt(input[0].split(' ')[1]);
const V = parseInt(input[0].split(' ')[2]);

if(A === V){
    console.log(1);
} else {
    console.log(Math.ceil((V-A)/(A-B))+1)
}