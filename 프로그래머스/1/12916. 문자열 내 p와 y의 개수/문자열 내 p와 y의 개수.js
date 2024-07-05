function solution(s){
    // 소문자로 변환하여 비교하기 
    s = s.toLowerCase();
    
    let countP = 0;
    let countY = 0;

    // 문자열 순회하면서 'p'와 'y'의 개수 세기
    for( let i =0;i < s.length; i++){
        if(s[i] == 'p'){
            countP++;
        } else if(s[i] == 'y'){
            countY++;
        }
    }

    return countP === countY;
    
}