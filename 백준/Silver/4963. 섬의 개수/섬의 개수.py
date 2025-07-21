from sys import stdin
from collections import deque
input = stdin.readline 

# 총 8방향
dx = [1, -1, 0, 0, 1, -1, 1, -1]
dy = [0, 0, 1, -1, 1, -1, -1, 1]

# BFS 함수 정의
def bfs(x, y):
    que = deque()
    que.append((x, y))
    graph[y][x] = 0  # 시작 지점 방문 처리
    while que:
        a, b = que.popleft()
        for i in range(8):  # 8방향 탐색
            ny = b + dy[i]
            nx = a + dx[i]
            # 범위 내에 있고, 아직 방문 안 한 땅인 경우
            if 0 <= nx < m and 0 <= ny < n and graph[ny][nx] == 1:
                que.append((nx, ny)) # 다음에 방문할 곳으로 추가
                graph[ny][nx] = 0  # 방문 처리

result = []

while True:
    res = 0 # 지도에서 찾은 섬의 개수
    m, n = map(int, input().split())  # m: 너비(열), n: 높이(행)
    if n == 0 and m == 0:
        break # 입력 종료 조건
    graph = [list(map(int, input().split())) for _ in range(n)]

    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1: # 아직 방문하지 않은 땅이라면
                bfs(j, i) # 연결된 땅들을 모두 찾아서 0으로 만들기
                res += 1  # 새로운 섬 발견
    result.append(res)

# 결과 출력
for i in result:
    print(i)
