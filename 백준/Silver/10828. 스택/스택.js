const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const stack = [];
const n = Number(input[0]);
const result = [];

for (let i = 1; i <= n; i++) {
    const command = input[i];

    if (command.startsWith('push')) {
        const value = Number(command.split(' ')[1]);
        stack.push(value);
    } else if (command === 'pop') {
        result.push(stack.length > 0 ? stack.pop() : -1);
    } else if (command === 'size') {
        result.push(stack.length);
    } else if (command === 'empty') {
        result.push(stack.length > 0 ? 0 : 1);
    } else if (command === 'top') {
        result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
    }
}

console.log(result.join('\n'));
