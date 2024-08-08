function solution(myString, pat) {
    let str = '';
    for(let char of myString){
        if(char==='A'){
            str += 'B';
        }
        else{
            str += 'A';
        }
    }
    if(str.includes(pat)){
        return 1;
    }
    else{
        return 0;
    }
}