function solution(progresses, speeds) {
    const daysLeft = [];
    const n = progresses.length;
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let diff = 100 - progresses[i];
        let days = Math.ceil(diff/speeds[i]);
        daysLeft.push(days);
    }
    
    // console.log(daysLeft);
    
    let count = 0;
    let front = daysLeft[0];
    
    for (let i = 0; i < n; i++) {
        if (front >= daysLeft[i]) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            front = daysLeft[i];       
        }
    }
    answer.push(count);
    return answer;
}
    
