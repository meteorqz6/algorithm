// DFS - 깊이 우선 탐색 (데이터 구조 : 재귀(스택))
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const graph = Array.from({ length: n + 1 }, () => []);
// console.log(graph);

for (let i = 2; i < 2 + m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
// console.log(graph);

const visited = Array(n + 1).fill(false);

function dfs(node) {
    visited[node] = true;
    let cnt = 1;

    for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
            cnt += dfs(neighbor);
        }
    }
    return cnt;
}

console.log(dfs(1) - 1);