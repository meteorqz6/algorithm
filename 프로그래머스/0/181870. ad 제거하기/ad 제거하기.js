function solution(strArr) {
    let result = [];
    for(let str of strArr){
        if(!str.includes("ad")){
            result.push(str);
        }
    }
    return result;
}