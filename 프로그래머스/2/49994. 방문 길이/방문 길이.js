function solution(dirs) {

  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  let currentPos = [0, 0];
  const visitedPaths = new Set();

  for (const dir of dirs) {
    const [dx, dy] = move[dir];
    const nextPos = [currentPos[0] + dx, currentPos[1] + dy];

    if (nextPos[0] < -5 || nextPos[0] > 5 || nextPos[1] < -5 || nextPos[1] > 5) {
      continue; 
    }

    const path = [currentPos.join(','), nextPos.join(',')].sort().join('->');
    
    visitedPaths.add(path);
    
    currentPos = nextPos;
  }


  return visitedPaths.size;
}
