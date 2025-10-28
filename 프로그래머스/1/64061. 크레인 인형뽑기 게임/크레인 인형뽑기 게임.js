function solution(board, moves) {
  const n = board.length;
  const m = moves.length;
  const basket = [];
  let stack = [];
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const column = board
      .map((row) => row[i])
      .filter((item) => item !== 0)
      .reverse();
    stack.push(column);
  }

  for (let i = 0; i < m; i++) {
    let target = stack[moves[i] - 1];

    if (target.length === 0) {
      continue;
    }

    let targetTop = target[target.length - 1];
    let basketTop = basket[basket.length - 1];

    if (basket.length === 0 || basketTop !== targetTop) {
      basket.push(targetTop);
      target.pop();
    } else {
      basket.pop();
      target.pop();
      answer += 2;
    }
  }

  return answer;
}

// 0 0 0 0 0
// 0 0 1 0 3
// 0 2 5 0 1
// 4 2 4 4 2
// 3 5 1 3 1
