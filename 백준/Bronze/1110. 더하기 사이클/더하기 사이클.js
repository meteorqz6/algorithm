const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0]);
let arr = [n];
let n1;
let n2;
let n3;
let newn;


for(let i = 0;;i++ ){
    n1 = arr[i]%10;
    n2 = Math.floor(arr[i]/10);
    n3 = (n1 + n2)%10;
    newn = n1.toString() + n3.toString();
    if(newn == arr[0]){
        break;
    }
    else{
        arr.push(Number(newn));
    }
}
console.log(arr.length);