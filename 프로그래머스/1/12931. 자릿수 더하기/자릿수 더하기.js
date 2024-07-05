function solution(n)
{
    // n을 문자열로 변환하여 각 자릿수 분리 
    // 배열 digits에 각 자릿수가 문자열 형태로 저장된다 
    const digits = n.toString().split('');
    //console.log(digits);

    let sum = 0;

    for(let i = 0 ; i < digits.length; i++){
        sum += parseInt(digits[i], 10); // 각 자릿수를 10진수 숫자로 변환하여 더한다 
    }

    return sum;

}

//console.log(solution(123));