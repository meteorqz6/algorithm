function solution(n_str) {
    var answer = '';
    let flag = 0;
    for( let i = 0; i < n_str.length; i++ ){
        if(n_str[i] !== '0'){
            flag = 1;
        }
        if(flag===1){
            answer += n_str[i];
        }
    }
    return answer;
}