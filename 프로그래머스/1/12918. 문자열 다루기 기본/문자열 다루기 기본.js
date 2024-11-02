function solution(s) {
    if(s.length === 4 || s.length === 6 ){
        const integerPattern = /^[0-9]\d*$/;
        return integerPattern.test(s);
    }
    else{
        return false;
    }
}
