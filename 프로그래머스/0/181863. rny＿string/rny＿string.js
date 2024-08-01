function solution(rny_string) {
    let str ='';
    for(let i = 0; i < rny_string.length; i++){
        if(rny_string[i] === 'm'){
            str += 'r';
            str += 'n';
        }
        else{
            str += rny_string[i];
        }
    }
    return str;
}