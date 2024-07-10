function solution(n) {
    if(n==1){return 1;}
    else if(n%7==0){return n/7;}
    else{return Math.floor(n/7) + 1 ; }

}