function solution(my_strings, parts) {
    let result = '';
    for( let i = 0 ; i < my_strings.length; i++){
        let str = my_strings[i];
        let [s, e] = parts[i];
        let substring = str.slice(s, e+1);
        result += substring;
    }
    return result;
}