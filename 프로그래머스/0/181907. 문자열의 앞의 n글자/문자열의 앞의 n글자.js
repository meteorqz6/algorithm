function solution(my_string, n) {
    let result ='';
    for(let i = 0 ; i < n; i++){
        result += my_string[i];
    }
    return result;
}