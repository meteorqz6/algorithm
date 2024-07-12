function solution(num_str) {
    let arr = num_str.split('');
    var answer = 0;
    for ( let i = 0; i < num_str.length ; i++){
        answer += parseInt(arr[i]);
    }
    return answer;
}