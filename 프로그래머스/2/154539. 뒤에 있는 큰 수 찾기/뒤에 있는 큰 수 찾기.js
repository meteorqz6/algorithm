function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1); // 초기값 -1로 설정
    let stack = []; // 인덱스를 저장할 스택

    for (let i = 0; i < numbers.length; i++) {
        // 스택의 top이 현재 숫자보다 작으면 answer를 갱신
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            let idx = stack.pop();
            answer[idx] = numbers[i];
        }
        // 현재 인덱스를 스택에 추가
        stack.push(i);
    }

    return answer;
}
