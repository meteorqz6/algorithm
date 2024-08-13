function solution(myString) {
    let arr = myString.split('');
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 'l'){
            arr[i] = 'l';
        }
    }
    return arr.join('');
}