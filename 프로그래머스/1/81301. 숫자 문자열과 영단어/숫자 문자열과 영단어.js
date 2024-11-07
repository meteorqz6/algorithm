function solution(s) {
    const len = s.length;
    let result = "";
    for(let i = 0 ; i < len; ) {

    if(s[i] == 0 || s[i] == 1 || s[i] == 2 || s[i] == 3 || s[i] == 4 || s[i] == 5 || s[i] == 6 || s[i] == 7 || s[i] == 8 || s[i] == 9){
        result += s[i];
        i++;
    } 

    if(s[i] === 'z') {
        result += 0;
        i += 4;
    }

    if(s[i] === 'o') {
        result += 1;
        i += 3;
    }

    if(s[i] === 't' && s[i+1] === 'w') {
        result += 2;
        i += 3;
    }

    if(s[i] === 't' && s[i+1] === 'h') {
        result += 3;
        i += 5;
    }


    if(s[i] === 'f' && s[i+1] === 'o') {
        result += 4;
        i += 4;
    }

    if(s[i] === 'f' && s[i+1] === 'i') {
        result += 5;
        i += 4;
    }

    if(s[i] === 's' && s[i+1] === 'i') {
        result += 6;
        i += 3;
    }

    if(s[i] === 's' && s[i+1] === 'e') {
        result += 7;
        i += 5;
    }

    if(s[i] === 'e') {
        result += 8;
        i += 5;
    }

    if(s[i] === 'n') {
        result += 9;
        i += 4;
    }
}
    return Number(result);
}