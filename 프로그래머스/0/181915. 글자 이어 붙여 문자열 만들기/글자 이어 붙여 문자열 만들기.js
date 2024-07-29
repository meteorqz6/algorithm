function solution(my_string, index_list) {
    let str = '';
    for(let i = 0; i < index_list.length; i++){
        str += my_string[index_list[i]];
    }
    return str;
}