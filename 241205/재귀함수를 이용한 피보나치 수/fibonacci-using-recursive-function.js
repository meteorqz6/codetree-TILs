const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    // 종료 조건
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    // 점화식
    return f(n - 1) + f(n - 2);
}

console.log(f(n));