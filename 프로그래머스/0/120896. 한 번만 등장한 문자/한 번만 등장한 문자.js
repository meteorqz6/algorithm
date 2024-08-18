function solution(s) {
    let arr = [];
    let result; 
    let cnt = 0;
    for(let i = 0 ; i < s.length; i++ ){
        cnt = 0;
        for(let j = 0; j < s.length; j++){
            if(s[j]===s[i]){
                cnt++;
            }
        }
        if(cnt===1){
            arr.push(s[i]);
        }
    }
    return arr.sort().join('');
}