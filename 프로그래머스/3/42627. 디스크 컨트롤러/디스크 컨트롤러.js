function solution(jobs) {
  let time = 0; // 현재 시간
  let totalTime = 0; // 총 반환 시간
  let jobCount = jobs.length;
  let idx = 0;

  // 요청 시간 순으로 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  const waitingQueue = [];

  while (idx < jobCount || waitingQueue.length > 0) {
    // 현재 시간까지 요청된 작업들을 대기 큐에 추가
    while (idx < jobCount && jobs[idx][0] <= time) {
      const [start, duration] = jobs[idx];
      waitingQueue.push({ start, duration });
      idx++;
    }

    if (waitingQueue.length > 0) {
      // 대기 큐에서 가장 우선순위 높은 작업 선택
      waitingQueue.sort((a, b) => {
        if (a.duration !== b.duration) return a.duration - b.duration;
        if (a.start !== b.start) return a.start - b.start;
        return 0; // 같은 경우 순서 유지
      });

      const job = waitingQueue.shift();
      time += job.duration;
      totalTime += time - job.start; // 반환 시간 = 종료 시점 - 요청 시점
    } else {
      // 대기 큐가 비어있으면, 다음 작업 요청 시간까지 건너뜀
      time = jobs[idx][0];
    }
  }

  return Math.floor(totalTime / jobCount);
}
