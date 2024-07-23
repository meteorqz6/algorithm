function solution(n) {
    let sum1 = 0;
    let sum2 = 0;
    
    if(n%2!=0){
        for( let i = 1 ; i <= n; i = i + 2){
            sum1+= i;
        }
        return sum1;
    }
    else{
        for( let i = 2 ; i <= n ; i = i + 2){
            sum2 += Math.pow(i,2);
        }
        return sum2;
    }
}