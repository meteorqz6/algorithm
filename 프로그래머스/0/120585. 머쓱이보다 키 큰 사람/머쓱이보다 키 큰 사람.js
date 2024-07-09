function solution(array, height) {
    let cnt = 0;
    for( let i = 0; i < array.length; i++){
        if( array[i] > height){
            cnt++;
        }
    }
    return cnt;

}