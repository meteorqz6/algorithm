function solution(N, stages) {
    const failRates = [];
    
    for (let i = 1; i <= N; i++) {
        let arr = stages.filter(stage => stage >= i);
        let failArr = arr.filter(stage => stage == i);
        failRates.push(failArr.length/arr.length);
    }
    
    const answer = Array.from(failRates.keys()).sort((a, b) => failRates[b] - failRates[a]);
    
    return answer.map(value => value + 1);
}

// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// N: 전체 스테이지의 개수, stages: 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담긴 배열 return, 실패율이 같다면 작은 번호의 스테이지가 먼저 오도록