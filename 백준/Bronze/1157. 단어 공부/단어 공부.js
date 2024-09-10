const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let str = input[0];
let str1 = str.toUpperCase();

const obj = {};
for( let char of str1 ){
    if(obj[char]){
        obj[char] += 1; 
    } else {
        obj[char] = 1;
    }
}

const maxVal = Math.max(...Object.values(obj));
const keysWithMaxVal = Object.keys(obj).filter(key=>obj[key]===maxVal)
if(keysWithMaxVal.length > 1){
    console.log('?')
} else {
    console.log(keysWithMaxVal[0])
}