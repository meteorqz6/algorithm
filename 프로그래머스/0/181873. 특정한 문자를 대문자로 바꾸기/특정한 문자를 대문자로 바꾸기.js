function solution(my_string, alp) {
    return my_string.split('').map(char => {
        return char === alp ? char.toUpperCase() : char;
    }).join('');

}