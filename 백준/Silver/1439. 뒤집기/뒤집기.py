s = input().strip()

zero_cnt = 0
one_cnt = 0

# 첫 문자 기준으로 초기화
if s[0] == '0':
    zero_cnt += 1
else:
    one_cnt += 1

# 앞 문자와 다를 때마다 카운팅
for i in range(1, len(s)):
    if s[i] != s[i-1]:
        if s[i] == '0':
            zero_cnt += 1
        else:
            one_cnt += 1

print(min(zero_cnt, one_cnt))