function solution(a, d, included) {
    let arr = [];
    let sum = 0;
    for( let i = 1; i <= included.length; i++){
        arr.push(d*(i-1)+a);
    }
    for( let i = 0; i < included.length; i++){
        if(included[i]===true){
            sum += arr[i];
        }
    }
    
    return sum;
}