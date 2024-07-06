function solution(price, money, count) {
    let sum = 0;
    for( let i = 1 ; i <= count; i++){
        sum += price*i;
    }
    if( money > sum){
        return 0;
    }


    return sum - money;
}