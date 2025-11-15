import sys

input = sys.stdin.readline
n = int(input())
seat = [[0] * n for _ in range(n)] # 2차원 배열 생성 - 자리
students = []

for i in range(n ** 2):
    students.append(list(map(int, input().split())))

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

# 학생 자리 배치
for student in students:
    available = []

    for i in range(n):
        for j in range(n):
            if seat[i][j] == 0:
                prefer, empty = 0, 0

                for k in range(4):
                    nx = i + dx[k]
                    ny = j + dy[k]

                    if 0 <= nx < n and 0 <= ny < n:
                        if seat[nx][ny] in student[1:]:
                            prefer += 1
                        if seat[nx][ny] == 0:
                            empty += 1
                
                available.append((i, j, prefer, empty))

    # 정렬 기준
    # 1. prefer 수의 내림차순, 2. empty 수의 내림차순, 3. i 값의 오름차순, 4. j 값의 오름차순
    available.sort(key = lambda x: (-x[2], -x[3], x[0], x[1]))
    seat[available[0][0]][available[0][1]] = student[0]

# 학생 만족도 계산
result = 0
score = [0, 1, 10, 100, 1000]
# print(students)
students.sort()
# print(students)

for i in range(n):
    for j in range(n):
        cnt = 0

        for k in range(4):
            nx = i + dx[k]
            ny = j + dy[k]

            if 0 <= nx < n and 0 <= ny < n:
                if seat[nx][ny] in students[seat[i][j] - 1]:
                    cnt += 1

        result += score[cnt]
        
print(result)

