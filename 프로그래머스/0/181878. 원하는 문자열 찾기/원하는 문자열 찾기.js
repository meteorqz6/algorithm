function solution(myString, pat) {
    let str1 = myString.toLowerCase();
    let str2 = pat.toLowerCase();
    
    if(str1.includes(str2)){
        return 1;
    }
    else{
        return 0;
    }
}