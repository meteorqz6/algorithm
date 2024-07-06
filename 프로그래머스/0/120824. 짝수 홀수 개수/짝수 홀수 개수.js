function solution(num_list) {
    let arr = [0,0];
    let cnt1 = 0;
    let cnt2 = 0;
    for ( let i = 0; i < num_list.length ; i++ ){
        if(num_list[i]%2==0){
            cnt1++;
        }
        else{cnt2++;}
    }
    arr[0] = cnt1;
    arr[1] = cnt2;
    return arr;
}