function solution(arr) {
    let answer = arr.map(num=>{
        if(num>= 50 && num%2==0){
            return num/2;
        }
        else if ( num < 50 && num%2!=0){
            return num*2;
        }
        else{
            return num;
        }
    });
    return answer;
}