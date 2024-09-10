const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let caseNum = parseInt(input[0]);

for ( let i = 1 ; i <= caseNum ; i++ ){
    let arr = [];
    let sum = 0;
    let cnt = 0;
    for ( let j = 1; j <= parseInt(input[i].split(' ')[0]); j++ ){
        arr.push(parseInt(input[i].split(' ')[j]));
        sum += parseInt(input[i].split(' ')[j]);
    }
    let avg = sum/parseInt(input[i].split(' ')[0]);
    arr.forEach((value)=>{
        if(avg < value){
            cnt++;
        }
    })
    let result = cnt/parseInt(input[i].split(' ')[0])*100
    console.log(parseFloat(result.toFixed(3))+'%')
}