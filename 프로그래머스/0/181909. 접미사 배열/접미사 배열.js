function solution(my_string) {
    let result = [];
    let str = '';
    let arr = [];
    let str2;
    for(let i = my_string.length - 1; i >= 0; i--){
        str += my_string[i];
        arr = str.split('').reverse();
        str2 = arr.join('');
        result.push(str2);
    }
    return result.sort();
}