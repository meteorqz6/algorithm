function solution(numbers) {
    const n = numbers.length;
    const arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    
    const result = [...new Set(arr)];
    result.sort((a, b) => a - b);
    return result;
}