function solution(my_string, num1, num2) {
    let arr = my_string.split('');
    let tmp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = tmp;
    
    return arr.join('');
    
}