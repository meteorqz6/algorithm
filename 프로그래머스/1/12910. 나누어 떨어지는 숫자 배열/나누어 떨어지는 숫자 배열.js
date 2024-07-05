function solution(arr, divisor) {
    let len = arr.length;
    let cnt = 0;
    let answer = [];
    for( let i = 0; i < len ; i++){
        if(arr[i]%divisor == 0){
            cnt += 1;
            answer.push(arr[i]);
        }
    }
    answer.sort((a,b) => a - b);
    
    if( cnt == 0){
        answer = [-1];
    }
    
    return answer;

}