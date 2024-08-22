function solution(nums) {
    const obj = {};
    const cnt = nums.length/2;
    for(const n of nums){
        if(obj[n]){
            obj[n] += 1;
        } else {
            obj[n] = 1;
        }
    }
    const keyCount = Object.keys(obj).length;
    if(keyCount >= cnt){
        return cnt;
    }else{
        return keyCount;
    }
    //return obj;
}