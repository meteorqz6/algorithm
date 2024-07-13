function solution(num_list) {
    num_list.sort((a,b)=> a - b);
    let answer = [];
    for ( let i = 5 ; i < num_list.length ; i++){
        answer.push(num_list[i]);
    }
    //var answer = [];
    return answer;
}