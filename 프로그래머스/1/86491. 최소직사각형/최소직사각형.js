function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    for (let [w, h] of sizes) {
        // 가로와 세로 중 더 큰 값을 가로로, 작은 값을 세로로 맞추기
        let [longer, shorter] = w > h ? [w, h] : [h, w];
        
        // 최대 가로 길이와 최대 세로 길이 찾기
        maxW = Math.max(maxW, longer);
        maxH = Math.max(maxH, shorter);
    }

    // 지갑의 크기 반환
    return maxW * maxH;
}