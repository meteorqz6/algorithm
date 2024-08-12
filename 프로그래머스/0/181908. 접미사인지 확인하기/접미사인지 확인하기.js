function solution(my_string, is_suffix) {
    let arr = [];
    for( let i = my_string.length - 1; i >= 0; i-- ){
        arr.push(my_string.slice(i,my_string.length));
    }
    if(arr.includes(is_suffix)){
        return 1;
    }
    else{
        return 0;
    }
}