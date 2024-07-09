function solution(numbers) {
    let answer = [];
    for ( let i = 0; i < numbers.length ; i++ ){
        for ( let j = i+1 ; j < numbers.length ; j++){
            if(answer.indexOf(numbers[i]+numbers[j]) === -1 )
            answer.push(numbers[i]+numbers[j]);
        }
    }
    return answer.sort((a,b)=>a-b);
}
// 0 1234
// 1 234
// 2 34
// 3 4   11234