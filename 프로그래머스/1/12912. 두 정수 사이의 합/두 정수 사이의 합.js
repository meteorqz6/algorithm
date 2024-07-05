function solution(a, b) {
    let small,big;

    if ( a > b){
         big = a;
        small = b;
    }
    else if ( a < b){
         big = b;
        small = a;
    }
    else{
        return a;
    }
    let sum = 0;
    for(let i = small; i <=big ; i ++){
        sum += i;
    }
    return sum;

}