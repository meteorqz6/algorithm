const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// (6,2) (10,3) 6-0 10-6 2-0 3-2
// (1,1) (5,5)  1-0 5-1 1-0 5-1 

let x = parseInt(input[0].split(' ')[0]);
let y = parseInt(input[0].split(' ')[1]);
let w = parseInt(input[0].split(' ')[2]);
let h = parseInt(input[0].split(' ')[3]);

let min = 1001;
let arr = [];
arr.push(x);
arr.push(y);
arr.push(w-x);
arr.push(h-y);

for( let i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(min);