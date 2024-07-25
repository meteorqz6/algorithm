function solution(s, n) {
    // 결과 문자열을 저장할 변수
    let result = '';
    
    // 문자열의 각 문자를 순회
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // 소문자일 경우
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
        }
        // 대문자일 경우
        else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
        }
        // 알파벳이 아닐 경우
        else {
            result += char;
        }
    }
    
    return result;
}