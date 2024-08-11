function solution(order) {
    let result = 0;
    let str = order.toString();
    for(let i = 0; i < str.length; i++){
        if(str[i]==='3' || str[i]==='6' || str[i]==='9'){
            result += 1;
        }
    }
    return result;
}