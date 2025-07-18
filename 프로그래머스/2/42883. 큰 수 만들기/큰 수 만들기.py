def solution(number, k):
    stack = []
    for digit in number:
        while stack and k > 0 and stack[-1] < digit:
            stack.pop()
            k -= 1
            
        stack.append(digit)
        
    if k > 0:
        stack = stack[:-k]
        
    answer = "".join(stack)
    return answer