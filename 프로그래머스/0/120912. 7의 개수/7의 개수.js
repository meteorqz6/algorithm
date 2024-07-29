function solution(array) {
    let str = '';
    str = array.join('');
    let cnt = 0;
    for( let i = 0 ; i < str.length; i++){
        if( str[i] === '7'){
            cnt++;
        }
    }
    return cnt;
}