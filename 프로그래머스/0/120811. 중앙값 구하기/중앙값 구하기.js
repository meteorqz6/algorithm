function solution(array) {
    let arr = array.sort((a,b)=>a-b);
    
    //var answer = 0;
    return arr[Math.floor(array.length/2)];
}