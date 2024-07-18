function solution(my_string) {
    let s = my_string.toLowerCase();
    let arr = s.split('');
    return arr.sort().join('');
}