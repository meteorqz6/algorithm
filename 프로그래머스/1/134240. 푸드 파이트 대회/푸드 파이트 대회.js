function solution(food) {
    let arr = food.map(num=>{
        return Math.floor(num/2);
    })
    let str ='';
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr[i]; j++)
        str += i;
    }
    let reversestr = str.split('').reverse().join('');
    str += '0';
    str += reversestr;
    return str;
}
