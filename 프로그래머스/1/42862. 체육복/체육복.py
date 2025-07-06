def solution(n, lost, reserve):
    lost_set = set(lost) - set(reserve)
    reserve_set = set(reserve) - set(lost)

    answer = n - len(lost_set)

    for l in sorted(lost_set):
        if l - 1 in reserve_set:
            reserve_set.remove(l - 1)
            answer += 1
        elif l + 1 in reserve_set:
            reserve_set.remove(l + 1)
            answer += 1

    return answer
