function solution(sides) {
    let sum = 0;
    let max = 0;
    for( let i = 0; i < 3; i++){
        sum += sides[i];
        if(sides[i] > max){
            max = sides[i];
        }
    }  
    if(sum-max>max){
        return 1;
    }
    else{
        return 2;
    }
}