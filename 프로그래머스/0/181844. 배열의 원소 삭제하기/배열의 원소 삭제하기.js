function solution(arr, delete_list) {
    return arr.filter(element => !delete_list.includes(element));
}