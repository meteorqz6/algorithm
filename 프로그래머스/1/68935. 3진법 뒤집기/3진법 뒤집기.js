function solution(n) {
    let str = '';
    
    while(n > 0){
    str += n%3;
    n = Math.floor(n/3);
}
//str += Math.floor(n);

let arr = str.split('');
let answer = 0;
let cnt = arr.length - 1;

for (let i = 0; i < arr.length; i++ ){
    answer += arr[i]*Math.pow(3,cnt);
    cnt--;
}
    return answer;
}