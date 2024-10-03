function solution(k, m, score) {
    let sum = 0;
    const boxnum = Math.floor(score.length/m);
    const sortscore = score.sort((a,b)=>b-a);
    for(let i = 0, j = m - 1; i < boxnum; i++){
        sum += m*sortscore[j];
        j = j + m;
    }
    return sum;
}