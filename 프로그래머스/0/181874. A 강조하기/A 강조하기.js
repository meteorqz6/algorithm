function solution(myString) {
    let str = '';
    for( let i = 0; i < myString.length; i++){
        if(myString[i] === 'a'){
            str += 'A';
        }
        else if(myString[i] === 'A'){
            str += 'A';
        }
        else{
            str += myString[i].toLowerCase();
        }
    }
    return str;
}