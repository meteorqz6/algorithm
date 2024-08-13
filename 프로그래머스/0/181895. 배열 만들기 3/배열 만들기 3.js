function solution(arr, intervals) {
    var answer = [];
    const interval1s = intervals[0][0];
    const interval1e = intervals[0][1];
    const interval2s = intervals[1][0];
    const interval2e = intervals[1][1];
    
    for( let i = interval1s; i <= interval1e; i++ ){
        answer.push(arr[i]);
    }
    for( let i = interval2s; i <= interval2e; i++ ){
        answer.push(arr[i]);
    }
    return answer;
    
}