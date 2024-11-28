function lcm(n, m) {
    let gcd;
    let min = n < m ? n : m;
    for (let i = 1; i <= min; i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    console.log(n * m / gcd);
}

const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
lcm(n, m);