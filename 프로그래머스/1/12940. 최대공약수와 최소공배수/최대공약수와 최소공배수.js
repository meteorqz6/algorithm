function gcd(a, b) {

    while( b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    return [gcd(n,m), lcm(n,m)];

}