function solution(s) {
    let arr = s.split('');
    let len = s.length;
    let answer = [];
    
    if(len%2==0){
        answer.push(arr[parseInt(len/2)-1]);
        answer.push(arr[parseInt(len/2)]);
    }
    else{
        answer.push(arr[parseInt(len/2)]);
    }
    
    return answer.join('');


}
    
    // 01234 -> 2 len = 5
    // 0123456 -> 3 len = 7
    // 012345 -> 23 len = 6 