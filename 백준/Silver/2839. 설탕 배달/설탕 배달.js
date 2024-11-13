const fs = require('fs');
const n = Number(require('fs').readFileSync('/dev/stdin').toString());
let cnt = 0;

let quotient_5;
let remainder_5;
let quotient_3;
let remainder_3;

quotient_5 = parseInt(n / 5);
remainder_5 = n % 5;

if (remainder_5 === 0) {
    cnt = quotient_5;
} else if (remainder_5 === 1 || remainder_5 === 2 || remainder_5 === 4) {
    for (let i = quotient_5; i > 0; i--) {
        if ((n - i * 5) % 3 === 0) {
            cnt += i + (n - i * 5) / 3;
            break;
        }
    }
    if (cnt <= 0) {
        quotient_3 = parseInt(n / 3);
        remainder_3 = n % 3;
        if (remainder_3 === 0) {
            cnt = quotient_3;
        } else {
            cnt = -1;
        }
    }
} else {
    cnt += quotient_5;
    cnt += remainder_5 / 3;
}

console.log(cnt);
