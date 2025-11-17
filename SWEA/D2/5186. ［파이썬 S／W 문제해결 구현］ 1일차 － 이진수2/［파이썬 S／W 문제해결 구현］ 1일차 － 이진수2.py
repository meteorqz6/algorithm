n = int(input())
for i in range(n): 
    m = float(input())
    binary_digits = [] 

    for _ in range(12):
        m *= 2
        
        if m >= 1:
            binary_digits.append('1')  
            m -= 1
        else:
            binary_digits.append('0') 
            
        if m == 0:
            break
            
    if m == 0:
        result_str = "".join(binary_digits)
        print(f'#{i + 1} {result_str}')
    else:
        print(f'#{i + 1} overflow')