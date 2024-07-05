function solution(seoul) {
    let x;
    let len = seoul.length;
    for ( let i = 0 ; i < len; i++){
        if(seoul[i] == "Kim"){
            x = i;
        }
    }
    var answer = "김서방은 " + x + "에 있다" ;
    return answer;
}