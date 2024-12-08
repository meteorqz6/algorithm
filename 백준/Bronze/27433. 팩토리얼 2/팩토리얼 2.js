const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString());

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return factorial(n - 1) * n;
}

console.log(factorial(n));