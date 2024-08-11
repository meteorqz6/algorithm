function solution(myString) {
    let arr = myString.split('x');
    let result = [];
    for( let i = 0; i < arr.length; i++){
        result.push(arr[i].length);
    }
    return result;
}