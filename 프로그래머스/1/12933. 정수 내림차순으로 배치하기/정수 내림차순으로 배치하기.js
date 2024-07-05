function solution(n){
    // 1. 정수 n을 문자열로 변환 118372 -> '118372'
    let str = n.toString();

    // 2. 문자열을 배열로 변환하여 각 자릿수를 분리 '118372' -> ['1','1','8','3','7','2']
    let arr = str.split('');

    // 3. 내림차순 정렬       ['8','7','3','2','1','1']
    arr.sort((a,b) => b - a);

    // 4. 배열을 다시 문자열로 결합 '873211'
    let sortedStr = arr.join('');

    // 5. 문자열을 정수로 변환하여 반환 873211
    return parseInt(sortedStr,10);

}

//console.log(solution(118372));