const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const queue = [];
const result = [];

for (let i = 1; i <= N; i++) {
    const command = input[i];

    if (command.startsWith('push')) {
        const value = Number(command.split(' ')[1]);
        queue.push(value);
    } else if (command === 'pop') {
        result.push(queue.length ? queue.shift() : -1);
    } else if (command === 'size') {
        result.push(queue.length);
    } else if (command === 'empty') {
        result.push(queue.length ? 0 : 1);
    } else if (command === 'front') {
        result.push(queue.length ? queue[0] : -1)
    } else if (command === 'back') {
        result.push(queue.length ? queue[queue.length - 1] : -1);
    }
}

console.log(result.join('\n'));