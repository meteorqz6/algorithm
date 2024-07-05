function solution(n) {
    let arr = Array(n).fill('수');
    for ( let i = 1 ; i < n ; ){
        arr.splice(i,1,"박");
        i += 2;
    }
    return arr.join('');
    

}

//1357 -> 박