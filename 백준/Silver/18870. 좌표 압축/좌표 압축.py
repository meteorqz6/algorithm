import sys
input = sys.stdin.readline

n = int(input())
coords = list(map(int, input().split()))
sorted_unique_coords = sorted(list(set(coords)))
coord_map = {value: index for index, value in enumerate(sorted_unique_coords)}
result = [coord_map[c] for c in coords]
print(*result)