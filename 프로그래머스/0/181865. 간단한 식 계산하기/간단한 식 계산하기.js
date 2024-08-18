function solution(binomial) {
    let arr = binomial.split(' ');
    let a = Number(arr[0]);
    let b = Number(arr[2]);
    if(arr[1] === '+'){
        return a+b;
    }
    else if(arr[1] === '-'){
        return a-b;
    }
    else{
        return a*b;
    }
}