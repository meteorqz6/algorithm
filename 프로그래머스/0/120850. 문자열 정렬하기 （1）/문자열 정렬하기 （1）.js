function solution(my_string) {
    let result = [];
    for(let i = 0 ; i < my_string.length; i++){
        if(Number(my_string[i])){
            result.push(Number(my_string[i]));
        }
        else if(my_string[i]=='0'){
            result.push(0);
        }
    }
    return result.sort();
}