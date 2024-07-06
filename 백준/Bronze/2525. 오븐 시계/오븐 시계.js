const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let inputH = parseInt(input[0].split(' ')[0]);
let inputM = parseInt(input[0].split(' ')[1]);
let addM = parseInt(input[1]);

let timeinminutes = inputH*60 + inputM + addM;
let h = Math.floor(timeinminutes/60);
let m = timeinminutes%60;

if(h>=24){
    h -= 24;
}

console.log(h,m);