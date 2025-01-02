function solution(s) {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        let x = s[i];
        let cntX = 0;
        let cntNotX = 0;

        for (; i < s.length; i++) {
            if (s[i] === x) {
                cntX++;
            } else {
                cntNotX++;
            }

            if (cntX === cntNotX) {
                count++;
                console.log(i);
                i++;
                break;
            }
        }

        if (cntX !== cntNotX && i === s.length) {
            count++;
        }
    }
    return count;
}