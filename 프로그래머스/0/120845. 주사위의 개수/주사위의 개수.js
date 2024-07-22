function solution(box, n) {
    let n0 = Math.floor(box[0]/n);
    let n1 = Math.floor(box[1]/n);
    let n2 = Math.floor(box[2]/n);
    return n0*n1*n2;
}