function solution(cipher, code) {
    let arr = cipher.split('');
    let answer = [];
    
    for( let i = code - 1; i < arr.length; i = i + code){
        answer.push(arr[i]);
    }
    
    return answer.join('');
}