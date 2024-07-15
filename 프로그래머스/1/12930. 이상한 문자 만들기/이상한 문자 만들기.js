function solution(s) {
    // 단어별로 나누기
    let words = s.split(' ');

    // 각 단어별로 순회
    let transformedWords = words.map(word => {
        // 단어의 각 문자를 순회하면서 반환
        let transformedWord = word.split('').map((char,index) => {
            if( index%2 === 0 ){
                return char.toUpperCase();
            }
            else {
                return char.toLowerCase();
            }
        }).join('');
        return transformedWord;
    })

    return transformedWords.join(' ');
}