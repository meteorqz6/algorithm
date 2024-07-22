function solution(names) {
    var answer = [];
    for(let i = 0 ; i < names.length ; ){
        answer.push(names[i]);
        i += 5;
    }
    return answer;
}