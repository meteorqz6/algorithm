from collections import deque

def solution(people, limit):
    result = 0
    people.sort()
    q = deque(people)
    
    while q:
        heaviest = q.pop()
        if q and q[0] + heaviest <= limit:
            q.popleft()
        result += 1
        
    return result