function solution(x, n) {
    let x1 = x;
    let arr = [];

    for( let i = 0 ; i < n ; i++ ){
        arr.push(x);
        x += x1;
    }

    return arr;
}