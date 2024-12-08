const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let x = input[1].split(' ').map(Number);
let arr = Array(n + 1);
arr[0] = 0;

for (let i = 1; i < n + 1; i++) {
    arr[i] = x[i - 1];
}

function lcm(a, b) {
    let gcd = 1;
    for (let i = 1; i < Math.min(a, b) + 1; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return parseInt(a * b / gcd);
}

function getLcmAll(index) {
    if (index === 1) {
        return arr[1];
    }
    return lcm(getLcmAll(index - 1), arr[index]);
}

console.log(getLcmAll(n));
