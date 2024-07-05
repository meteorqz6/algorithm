function solution(arr){
    let sum = 0;
    let avg;
    let len = arr.length;

    for ( let i = 0; i < len ; i ++) {
        sum += arr[i];
    }

    avg = sum / len;

    return avg;
}