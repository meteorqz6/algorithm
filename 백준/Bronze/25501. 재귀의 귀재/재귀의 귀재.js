let cnt = 0;
function recursion(str, l, r) {
    cnt++;
    if (l >= r) return 1;
    else if (str[l] != str[r]) return 0;
    else return recursion(str, l + 1, r - 1);
}

function isPaolindrome(str) {
    cnt = 0;
    return [recursion(str, 0, str.length - 1), cnt];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
for (let i = 1; i <= n; i++) {
    let str = input[i];
    console.log(isPaolindrome(str).join(' '));
}
