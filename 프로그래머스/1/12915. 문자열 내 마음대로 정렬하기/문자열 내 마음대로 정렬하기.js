function solution(strings, n) {
    // 문자열을 정렬하기 위해서 n번째 인덱스의 문자와 문자열 자체를 기준으로 삼음
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            // n번째 문자가 같으면 사전 순으로 정렬
            return a.localeCompare(b);
        } else {
            // n번째 문자를 기준으로 정렬
            return a[n].localeCompare(b[n]);
        }
    });
}
