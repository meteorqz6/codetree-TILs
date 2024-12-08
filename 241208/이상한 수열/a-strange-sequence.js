function rule(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    return rule(parseInt(n / 3)) + rule(n - 1);
}

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
console.log(rule(n));