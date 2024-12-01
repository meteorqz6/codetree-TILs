function isPirme(n) {
    if (n === 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function num(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }

    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input.map(Number);
let cnt = 0;

for (let i = a; i <= b; i++) {
    if (isPirme(i) && num(i)) {
        cnt++;
    }
}

console.log(cnt);