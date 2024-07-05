function solution(arr) {
    let len = arr.length;
    let min = arr[0];
    let idx;

    if(len == 1){
        return [-1];
    }

    for(let i = 0; i < len ; i++){
        if(min > arr[i]){
            min = arr[i];
            idx = i;
        }
    }

    arr.splice(idx,1);
    return arr;  
}