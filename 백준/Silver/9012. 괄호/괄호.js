const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    const str = input[i];
    const stack = [];
    let result = 'YES';

    for (let j = 0; j < str.length; j++) {
        if(str[j] === '('){
            stack.push(1);
        } else {
            if(!stack.pop()){
                result = 'NO';
                break;
            }
        }
    }

    if(stack.length !== 0) {
        result = 'NO';
    }
    
    console.log(result);
}