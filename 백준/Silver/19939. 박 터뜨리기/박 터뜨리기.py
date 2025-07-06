import sys

input = sys.stdin.readline
ball, bag = map(int, input().strip().split())

min_required = (bag * (bag + 1)) // 2

if ball < min_required:
    print(-1)
else:
    remain = ball - min_required

    if remain % bag == 0:
        print(bag - 1)
    else:
        print(bag)