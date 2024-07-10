function solution(n) {
    var answer = [];
    // let cnt;
    // if(n%2!=0){
    //     cnt = Math.floor(n/2)+1;
    // }
    // else { cnt = n/2};
    for ( let i = 1 ; i <= n ; ){
        answer.push(i);
        i = i + 2;
    }

    return answer;
}