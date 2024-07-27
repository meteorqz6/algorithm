function solution(arr, k) {
    let result = [];
    if( k%2 === 0){
        result = arr.map(num=>{
            return num+k;
        })
    }
    else{
        result = arr.map(num=>{
            return num*k;
        })
    }
    return result;
}