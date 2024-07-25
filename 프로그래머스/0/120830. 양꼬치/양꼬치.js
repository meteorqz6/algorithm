function solution(n, k) {
    let cnt = Math.floor(n/10);
    return n*12000+k*2000-cnt*2000;
}