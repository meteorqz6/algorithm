function solution(s) {
    let arr = s.split('');
    let len = arr.length;
    let answer = Array(len).fill(-1);
    for ( let i = 0 ; i < arr.length ; i++ ){
        for ( let j = 0 ; j < i ; j++){
            if( arr[i] == arr[j] ){
                answer[i] = i - j;    
            }
        }
    }

    return answer;
}

// banana -> 0 , 01, 012