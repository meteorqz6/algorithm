function solution(array) {
    let max = 0;
    let idx;
    let answer = [];
    for ( let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
            idx = i;
        }
    }
    answer.push(max);
    answer.push(idx);
    return answer;

}