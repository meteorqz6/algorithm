function solution(my_string, is_prefix) {
    let arr = [];
    let str = '';
    for( let i = 0; i < my_string.length; i++){
        str += my_string[i];
        arr.push(str);
    }
    if(arr.includes(is_prefix)){
        return 1;
    }
    else{
        return 0;
    }
}