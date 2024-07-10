function solution(money) {
    let result = [0,0];
    result[0] = Math.floor(money/5500);
    result[1] = money - result[0]*5500;
    return result;

}