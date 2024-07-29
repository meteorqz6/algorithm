function solution(num_list) {
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i]%2 === 0){
            arr1.push(num_list[i]);
        }
        else{
            arr2.push(num_list[i]);
        }
    }
    
    return parseInt(arr1.join(''))+parseInt(arr2.join(''));


}