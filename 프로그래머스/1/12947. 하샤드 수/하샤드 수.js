function solution(x){
    let sum = 0;
    const digits = x.toString().split('');
    for( let i = 0; i < digits.length ; i ++){
        sum += parseInt(digits[i],10);
        //console.log(parseInt(digits[i]));
    }

    if(x % sum == 0){
        return true;
    }
    else{
        return false;
    }
   //// console.log();
}

// console.log(solution(12));

// 