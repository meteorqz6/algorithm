function solution(hp) {
    let cnt = 0;
    cnt += Math.floor(hp/5);
    hp = hp - 5*Math.floor(hp/5);
    cnt += Math.floor(hp/3);
    hp = hp - 3*Math.floor(hp/3);
    cnt += hp/1;
    return cnt;
}