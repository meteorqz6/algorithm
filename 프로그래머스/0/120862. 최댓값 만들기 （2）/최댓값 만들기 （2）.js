function solution(numbers) {
    let arr = numbers.sort((a,b) => b - a);
    let n1 = arr[0]*arr[1];
    let n2 = arr[numbers.length-2]*arr[numbers.length-1];
    if( n1 > n2){
        return n1;
    }
    else{
        return n2;
    }

}