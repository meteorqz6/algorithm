function solution(my_string) {
    return my_string.split('').map(char => {
        // 문자가 대문자인 경우 소문자로, 소문자인 경우 대문자로 변환
        if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            return char.toUpperCase();
        }

    }).join('');
}
