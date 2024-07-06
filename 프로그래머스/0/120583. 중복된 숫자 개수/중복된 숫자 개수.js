function solution(array, n) {
    let cnt = 0;
    for( let i = 0; i < array.length; i++){
        if(array[i] == n){
            cnt += 1;
        }
    }
   
    return cnt;
}