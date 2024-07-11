function solution(my_string) {
    let arr = my_string.split('');
    let answer = [];
    for ( let i = 0; i < arr.length ; i++){
        if( arr[i] != 'a' && arr[i] != 'o' && arr[i] != 'u' && arr[i] != 'i' && arr[i] != 'e' ){
            answer.push(arr[i]);
        }
    }
    return answer.join('');
}