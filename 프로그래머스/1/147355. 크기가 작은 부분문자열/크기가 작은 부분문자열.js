function solution(t, p) {
    let intP = parseInt(p);
    let intT;
    let cnt = 0;
    for ( let i = 0 ; i+p.length <= t.length ; i++){
        intT = parseInt(t.slice(i,i+p.length));
        if(intT <= intP){
            cnt++;
        }
    }
    return cnt;
}