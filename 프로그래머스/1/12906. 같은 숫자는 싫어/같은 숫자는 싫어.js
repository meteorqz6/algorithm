function solution(arr) {
    // 결과를 담을 배열 초기화
    const result = [];
    
    // 첫 번째 원소를 먼저 결과 배열에 추가
    result.push(arr[0]);
    
    // 배열을 순회하면서 연속적인 숫자를 제거
    for (let i = 1; i < arr.length; i++) {
        // 현재 원소와 이전 원소가 다르면 결과 배열에 추가
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }
    
    return result;
}