function solution(my_string, n) {
    let result ="";
    
    for( let char of my_string){
        result += char.repeat(n);
    }
    
    return result;

}