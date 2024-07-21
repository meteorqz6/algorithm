function solution(num_list) {
    let sum1 = 0;
    let sum2 = 0;
    num_list.map ((num,index) => {
        if(index%2==0){
            sum1 += num;
        }
        else{
            sum2 += num;
        }
    })
    
    if(sum1 > sum2) {
        return sum1;
    }
    else {
        return sum2;
    }

}