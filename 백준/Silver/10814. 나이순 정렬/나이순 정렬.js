const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input[0]); // 회원수
let arr = [];

for(let i = 1; i <= n ; i++ ){
    arr.push(input[i]);
}

let data = arr.map(entry => {
    let [ageStr, ...nameStr] = entry.split(' ');
    let age = parseInt(ageStr);
    let name = nameStr;
    return { age, name };
});

data.sort((a, b) => {
    if(a.age !== b.age) {
        return a.age - b.age;
    } else {
        return 0;
    }
});

data.forEach(person => {
    console.log(`${person.age} ${person.name}`);
});