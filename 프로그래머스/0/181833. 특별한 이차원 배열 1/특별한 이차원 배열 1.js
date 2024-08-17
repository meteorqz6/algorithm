function solution(n) {
   
    let arr = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        arr[i][i] = 1;
    }

    return arr;
}
