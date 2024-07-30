const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let cnt = parseInt(input[0]);

function gcd(a, b) {
    return (a%b) ? gcd(b,a%b) : b;
}

function lcm(a, b) {
    return a*b / gcd(a,b);
}
for( let i = 1; i <= cnt; i++){
    console.log(lcm(parseInt(input[i].split(' ')[0]),parseInt(input[i].split(' ')[1])));
}