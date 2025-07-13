import sys
N,M = map(int, sys.stdin.readline().split())
x,y,d_index = map(int, sys.stdin.readline().split())
pan = []
for i in range(N):
    pan.append(list(map(int,sys.stdin.readline().split())))
direction = [[-1,0],[0,1],[1,0],[0,-1]] #북, 동, 남, 서
def go(i,j,d):
    global count
    # if i<0 or j<0 or i>(N-1) or j>(M-1):
    #     return
    if pan[i][j]==0: #현재칸이 청소되지 않았다면 청소한다.
        pan[i][j]=2
        count += 1
    #현재칸의 주변 4칸을 둘러보고 청소되지 않은 칸이 있다면 반시계방향으로 90도 회전하고 앞쪽칸이 청소되지 않은 빈칸이라면 전진하여 반복.
    if ifcleanaround(i,j):
        for k in range(4):
            d-=1
            if d<0:
                d+=4
            ni = i+direction[d][0]
            nj = j+direction[d][1]
            if pan[ni][nj]==0:
                break
        go(ni,nj,d)
    #주변 4칸중에 청소되지 않은 칸이 없다면
    else:
        ni = i-direction[d][0] #후진
        nj = j-direction[d][1]
        if pan[ni][nj]==1: #후진했을때 벽이라면 종료
            return
        go(ni,nj,d)   
def ifcleanaround(i,j):
    for k in range(4):
        ni = i+direction[k][0]
        nj = j+direction[k][1]
        if ni>=0 and nj>=0 and ni<=(N-1) and nj<=(M-1):
            if pan[ni][nj]==0:
                return True #청소되지 않은 칸이 있을때
    return False #청소되지 않은 칸이 없을때
count = 0

go(x,y,d_index)
print(count)