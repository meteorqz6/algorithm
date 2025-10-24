function solution(arr1, arr2) {
    const row = arr1.length;
    const column = arr2[0].length;
    const answer = [];

    for (let i = 0; i < row; i++) {
        let arr = [];
        for (let j = 0; j < column; j++) {
            let a = arr1[i];
            let b = arr2.map(row => row[j]);         
            let value = 0;
            for (let k = 0; k < a.length; k++) {
                value += a[k]*b[k];
            }
            arr.push(value);
        }
        answer.push(arr);
    }
    
    
    return answer;
}