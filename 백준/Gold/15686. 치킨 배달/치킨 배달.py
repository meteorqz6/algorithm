import sys
from itertools import combinations

input = sys.stdin.readline

INF = int(1e9)

def get_path_graph(stores, houses):
    return [[abs(sx - hx) + abs(sy - hy) for hx, hy in houses] for sx, sy in stores]

def get_min_city_chicken_distance(comb, path_graph, houses_n):
    min_distances = [INF] * houses_n
    for s in comb:
        for h in range(houses_n):
            min_distances[h] = min(min_distances[h], path_graph[s][h])
    return sum(min_distances)

def main():
    N, M = map(int, input().split())
    stores = []
    houses = []

    for i in range(N):
        row = list(map(int, input().split()))
        for j in range(N):
            if row[j] == 2:
                stores.append((i, j))
            elif row[j] == 1:
                houses.append((i, j))

    path_graph = get_path_graph(stores, houses)
    store_indices = range(len(stores))
    houses_n = len(houses)

    answer = INF
    for comb in combinations(store_indices, M):
        city_dist = get_min_city_chicken_distance(comb, path_graph, houses_n)
        answer = min(answer, city_dist)

    print(answer)

if __name__ == "__main__":
    main()
