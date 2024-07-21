function gcd(a, b) {
    while ( b!== 0 ) {
        let tmp = b;
        b = a % b;
        a = tmp;
    }
    return a;
}

function lcm(a, b) {
    return a*b / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
    
    let n1 = lcm(denom1, denom2);
    let n2 = n1/denom1*numer1 + n1/denom2*numer2;
    
    if(gcd(n1,n2) !== 1){
        return [n2/gcd(n1,n2) , n1/gcd(n1,n2)]
    }
    else{
        return [n2,n1];
    }
    
   // return [(n2/denom1*numer1 + n2/denom2*numer2), n2];
}

