function solution(n)
{
   
    const digits = n.toString().split('');
    //console.log(digits);

    let answer = [];

    for(let i = digits.length - 1 ; i >= 0 ; i--){
        answer.push(parseInt(digits[i]));
    }

    return answer;

}

//console.log(solution(123));