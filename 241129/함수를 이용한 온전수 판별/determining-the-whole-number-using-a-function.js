function num(n) {
    let a = n % 10;

    if (n % 2 === 0) {
        return false;
    }
    if (a === 5) {
        return false;
    }
    if (n % 3 === 0 && n % 9 !== 0) {
        return false;
    }

    return true;
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input.map(Number);
let cnt = 0;

for (let i = a; i <= b; i++) {
    if (num(i)) {
        cnt++;
    }
}

console.log(cnt);
