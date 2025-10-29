const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, K] = fs.readFileSync(filePath).toString().split(" ").map(Number);

class Node {
  constructor(data) {
    this.data = data; // 요소의 값
    this.next = null; // 다음 요소를 참조
  }
}

class Queue {
  constructor() {
    this.head = null; // 첫 번째 요소 참조
    this.tail = null; // 마지막 요소 참조
    this.size = 0; // 큐의 길이
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const removeNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const queue = new Queue();
const answer = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (!queue.isEmpty()) {

  for (let i = 0; i < K - 1; i++) {
    const front = queue.pop();
    queue.push(front);
  }

  answer.push(queue.pop());
}

console.log(`<${answer.join(", ")}>`);