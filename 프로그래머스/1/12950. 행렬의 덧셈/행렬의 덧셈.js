function solution(arr1, arr2) {
    // 결과를 담을 배열 초기화
    let answer = [];
    
    // arr1의 행 길이와 열 길이 구하기
    let len1 = arr1.length; // 행의 개수
    let len2 = arr1[0].length; // 열의 개수
    
    // 각 행에 대해 덧셈을 수행하여 answer 배열에 저장
    for (let i = 0; i < len1; i++) {
        // 현재 행의 결과를 담을 배열 초기화
        let row = [];
        for (let j = 0; j < len2; j++) {
            // 두 배열의 같은 위치의 요소를 더하여 현재 행에 추가
            row.push(arr1[i][j] + arr2[i][j]);
        }
        // 현재 행을 answer 배열에 추가
        answer.push(row);
    }
    
    // 최종 결과 반환
    return answer;
}
