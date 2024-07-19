function solution(my_string) {
    let sum = 0;
    for (let char of my_string) {
        // parseInt를 사용하여 숫자인지 확인 후, 숫자이면 더하기
        const num = parseInt(char);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}
