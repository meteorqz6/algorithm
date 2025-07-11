import sys
input = sys.stdin.readline

N = int(input().strip())
total_num = int(input().strip())
num = list(map(int, input().strip().split()))

result = {} # 학생 번호: 추천 수
order = {} # 학생 번호: 게시된 시점

for i in range(total_num):
  student = num[i]

  if student in result:
    result[student] += 1 # 이미 게시된 학생이면 추천 수 증가

  else:
    if len(result) == N:
      # 사진들이 가득 찬 경우
      min_key = min(result, key=lambda x: (result[x], order[x])) # 추천 수가 가장 적고, 동점이라면 가장 오래전에 게시된 학생 삭제
      result.pop(min_key)
      order.pop(min_key)
      
    result[student] = 1 # 새 학생 추가
    order[student] = i


for student in sorted(result.keys()):
  print(student, end=' ')