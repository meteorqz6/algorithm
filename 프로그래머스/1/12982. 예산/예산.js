function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let cnt = 0;
    
    for( let i = 0 ; i < d.length ; i++){
        budget = budget - d[i];
        if(budget < 0){break;}
        cnt++;
        }
    
    return cnt;
}