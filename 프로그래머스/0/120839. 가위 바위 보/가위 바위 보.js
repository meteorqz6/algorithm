function solution(rsp) {
    let arr = rsp.split('');
    let result = [];
    for( let i = 0; i < arr.length; i++ ){
        if( arr[i] === '2'){
            result.push('0');
        }
        else if( arr[i] === '0'){
            result.push('5');
        }
        else{
            result.push('2');
        }
    }
    return result.join('');
}