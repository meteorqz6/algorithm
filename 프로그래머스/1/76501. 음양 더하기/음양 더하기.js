function solution(absolutes, signs) {
    let len = absolutes.length;
    let sum = 0;
    
    for( let i = 0; i < len ; i++){
        if(signs[i]){
            sum += absolutes[i];
        }
        else{
            sum -= absolutes[i];
        }
}
    return sum;

}