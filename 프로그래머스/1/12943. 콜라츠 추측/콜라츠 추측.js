function solution(num) {
    
    let cnt = 0;
    if(num==1) return 0;
    while(cnt < 500){
        if(num%2==0){
            cnt++;
            num = num / 2;
        }
        else{
           cnt++;
            num = num*3 + 1;
        }
        if(num == 1) return cnt;
    }
    
    return -1;
}