// 0층 1호 : 1명, 0층 2호 : 2명, 0층 3호 : 3명 0층 4호 : 4명
// 1층 1호 : 1명, 1층 2호 : 3명, 1층 3호 : 6명 1층 4호 : 10명
// 2층 1호 : 1명, 2층 2호 : 4명, 2층 3호 : 10명 2층 4호 : 20명
// 0 1 2 3 4
// 0 1 3 6 10
// 0 1 4 10 20
function solution(k, n) {
    let apt = Array.from(Array(k+1),()=>Array(n+1).fill(0));
    //console.log(apt)
    for (let i = 1; i <=n; i++){
        apt[0][i] = i;
    }
    for ( let floor = 1; floor <= k; floor++){
        for(let room = 1; room <= n; room++){
            apt[floor][room] = apt[floor][room-1] + apt[floor-1][room];
        }
    }
   // console.log(apt)
    return apt[k][n];
}

const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let caseNum = parseInt(input[0]);
for (let i = 1; i <= caseNum*2; ){
    let k = parseInt(input[i]);
    let n = parseInt(input[i+1]);
    console.log(solution(k, n));
    i = i + 2;
}