function solution(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    let sum1 = 0;
    let sum2 = 0;
    
    arr1.map(num=>{
        sum1 += num;
    })
    
    arr2.map(num=>{
        sum2 += num;
    })
    
    if(len1 > len2){
        return 1;
    }
    else if( len1 < len2 ){
        return -1;
    }
    else{
        if( sum1 > sum2){
            return 1;
        }
        else if( sum1 < sum2 ){
            return -1;
        }
        else{
            return 0;
        }
    }
    
}