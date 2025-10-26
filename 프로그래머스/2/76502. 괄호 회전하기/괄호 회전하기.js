function calculate(arr) {
    const stack = [];
    for (const c of arr) {
        // const poppedC = stack.pop();
        // console.log(poppedC);
        const top = stack[stack.length - 1];
        if (c === "(" || c === "[" || c === "{") {
            stack.push(c);
        } else if (c === ")") {
            if (top === "(") {
                stack.pop();
            } else if (stack.length === 0) {
                return false;
            }
            
        } else if (c === "]") { 
            if (top === "[") {
                stack.pop();
            } else if (stack.length === 0) {
                return false;
            }
            
        } else if (c === "}") {
            if (top === "{") {
                stack.pop();
            } else if (stack.length === 0) {
                return false;
            }          
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let cnt = 0;
    let stack;
    const arr = s.split("");
    
    for (let i = 0; i < arr.length; i++) {
        const shiftedElement = arr.shift();    
        arr.push(shiftedElement);
        // console.log(arr.join(""));
        stack = arr.join("");
        if (calculate(stack.split(""))) {
            cnt++;
        }
    }
    
    return cnt;
}