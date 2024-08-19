const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0]);
let max = 0;
let arr = [];
let sum = 0;
 
for(let i = 0; i < n ; i++ ){
    arr.push(parseInt(input[1].split(' ')[i]));
}
for(let i = 0; i < n; i++ ){
    if(arr[i] > max){
        max = arr[i];
    }
}
for(let i = 0; i < n; i++ ){
    sum += arr[i]/max*100;
}
console.log(sum/n);

