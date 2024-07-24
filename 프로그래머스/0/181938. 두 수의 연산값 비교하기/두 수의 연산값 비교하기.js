function solution(a, b) {
    arr = [];
    arr.push(a);
    arr.push(b);
    num1 = parseInt(arr.join(''));
    let num2 = 2*a*b;
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}