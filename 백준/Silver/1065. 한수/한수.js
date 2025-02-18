const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const n = Number(input[0]);
let cnt = 0;

if (n < 100) {
    console.log(n);
} else {
    cnt = 99;

    for (let i = 100; i <= n; i++) {
        let arr = i.toString().split('');
        let len = arr.length;
        let sub = Number(arr[0]) - Number(arr[1]);

        for (let j = 1; j < len - 1; j++) {
            let comparison = Number(arr[j]) - Number(arr[j + 1]);
            if (sub === comparison) {
                cnt++;
            } else {
                break;
            }
        }
    }
    console.log(cnt);
}

