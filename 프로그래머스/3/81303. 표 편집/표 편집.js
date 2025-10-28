// n: 처음 표의 행 개수, k: 처음에 선택된 행의 위치, cmd: 수행한 명령어들이 담긴 문자열 배열
function solution(n, k, cmd) {
  const deleted = [];

  // down[3] = 4, up[5] = 4: 연결 리스트
  // up[0] =  -1, up[1] = 0, up[2] = 1 ,..., up[n + 1] = n
  // down[0] = 1, down[1] = 2, ... down[n] = n + 1
  // up[i]: i 위에 있는 행 번호
  // down[i]: i 이래에 있는 행 번호
  const up = Array.from({ length: n + 2 }, (_, i) => i - 1);
  const down = Array.from({ length: n + 1 }, (_, i) => i + 1);
  // const up = [...new Array(n + 2)].map((_, i) => i - 1);
  // const down = [...new Array(n + 1)].map((_, i) => i + 1);

  // 행 번호를 1 ~ n 사용: 1 기반 인덱스
  k += 1;

  for (const item of cmd) {
    // 현재 선택한 행 삭제
    if (item[0] === "C") {
      deleted.push(k);
      up[down[k]] = up[k]; // k의 아래 행의 up을 k의 위로
      down[up[k]] = down[k]; // k의 위 행의 down을 k의 아래로

      // 삭제된 행이 가장 마지막인 경우 바로 윗행 선택
      // 아닌 경우 바로 아래 행 선택
      k = n < down[k] ? up[k] : down[k];
    }
    // 가장 최근에 삭제된 행 복원
    else if (item[0] === "Z") {
      const restore = deleted.pop();
      down[up[restore]] = restore;
      up[down[restore]] = restore;
    }
    // U 또는 D를 사용해 현재 위치를 위아래로 이동
    else {
      const [action, num] = item.split(" ");
      if (action === "U") {
        for (let i = 0; i < num; i++) {
          k = up[k];
        }
      } else {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      }
    }
  }
  const answer = new Array(n).fill("O");
  for (const i of deleted) {
    answer[i - 1] = "X"; // 다시 0 기반 인덱스로
  }
  return answer.join("");
}
