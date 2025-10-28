function solution(s) {
    let answer = 0;
    let stack = s.split(" ");
    let n = stack.length;
    
    for (let i = 0; i < n; i++) {
        let top = stack[stack.length - 1];
        
        if (!top) {
            continue;
        }
        
        if (top === "Z") {
            stack.pop();
            stack.pop();
        } else {
            answer += Number(top);
            stack.pop();
        }
    }
    return answer;
}