function solution(n) {
    let sum = 0;
    let cnt = 0;
    
    for( let j = 1 ; j <= n; j++){
        sum = 0;
        for ( let i = j; i <=n ; i++){
            sum += i;
            if(sum===n){
                cnt++;
                break;
            }
            else if(sum > n){
                break;
            }
        }
    }
    return cnt;
}