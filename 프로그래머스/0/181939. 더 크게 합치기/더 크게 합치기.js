function solution(a, b) {
    let str1 = a.toString();
    let str2 = b.toString();
    let str12 = str1 + str2;
    let str21 = str2 + str1;
    let nstr12 = parseInt(str12);
    let nstr21 = parseInt(str21);
    if( nstr12 > nstr21){
        return nstr12;
    }
    else{
        return nstr21;
    }
    
}