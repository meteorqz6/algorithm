function solution(s) {
    let arr = s.split('');
    arr.sort().reverse();
    let str = arr.join('');
    
    return str;
}