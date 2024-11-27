function gcf(n, m) {
    let result;
    let min = n > m ? m : n;
    for (let i = 1; i <= min; i++) {
        if (n % i === 0 && m % i === 0) {
            result = i;
        }
    }
    console.log(result);
}

const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
gcf(n, m);