function solution(phone_number) {
    let arr = phone_number.split('');
    let len = arr.length;

    for( let i  = 0 ; i <= len - 5 ; i++){
        arr[i] = ('*');
    }

    return arr.join('');

}