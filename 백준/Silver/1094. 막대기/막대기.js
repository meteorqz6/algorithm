const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0]); // 주어진 수
let arr = [];
let cnt = 0;
// 수를 2진수로 바꾸고 1의 개수 세기 
while(n > 0){
    arr.push(n%2);
    n = Math.floor(n/2);
}
for( let i = 0; i < arr.length; i++ ){
    if(arr[i] === 1){
        cnt++;
    }
}
console.log(cnt);
