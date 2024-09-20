const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n1 = parseInt(input[0].split(' ')[0]);
let n2 = parseInt(input[0].split(' ')[1]);

function gcd(a, b) {
    while ( b!== 0){
        let tmp = b;
        b = a%b;
        a = tmp;
    }
    return a;
}

function lcm(a, b) {
    return (a*b) / gcd(a,b);
}

console.log(gcd(n1, n2));
console.log(lcm(n1, n2));