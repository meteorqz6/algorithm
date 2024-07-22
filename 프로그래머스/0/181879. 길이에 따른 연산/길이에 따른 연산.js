function solution(num_list) {
    if(num_list.length >= 11){
        let sum = 0;
        num_list.map(num =>{
            sum += num;
        })
        return sum;
    }
    else{
        let multiply = 1;
        num_list.map(num =>{
            multiply *= num;
        })
        return multiply;
        
    }
}