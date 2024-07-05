function solution(n) {
    let remainder;

    for ( let i = 1; i < n ; i++){
        remainder = n%i;
        if(remainder == 1){
            return i;
        }
    }
}