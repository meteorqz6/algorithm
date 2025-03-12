 // 2 1 4 3에서 2를 가장 뒤로 옮긴다. (1 4 3 2)
// 1을 책상 위에 옮겨놓는다. (4 3 2)
// 4 3 2 에서 4, 3을 뒤로 옮긴다. (2 4 3)
// 2를 책상 위로 옮겨놓는다. (4 3)
// 4 3 에서 가장 앞에 있는 것을 뒤로 3번 옮긴다. (3 4)
// 3을 책상 위로 옮겨놓는다. (4)
// 4를 책상 위로 옮겨놓는다. (완료)

// 4
// 3 4 -> 4 3 -> 3 4 -> 4 3
// 2 4 3 -> 3 2 4 -> 4 3 2
// 1 4 3 2 -> 2 1 4 3
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const n = Number(input[0]);
const arr = [n];

for (let i = n - 1; i > 0; i--) {
    arr.unshift(i);
    for (let j = 0; j < i; j++) {
        const lastCard = arr.pop();
        arr.unshift(lastCard)
    }
}

console.log(arr.join(" "));