function solution(s)
{
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];
        
        if (stack.length === 0) {
            stack.push(s[i]);
        } else {
            if (top === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    
    if (stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}