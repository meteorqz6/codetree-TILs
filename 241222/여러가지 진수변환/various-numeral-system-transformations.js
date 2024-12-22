const fs = require('fs');
const [N, B] = fs.readFileSync(0).toString().split(' ').map(Number);

function calculate(n, b) {
    let arr = [];

    while (true) {
        if (n < b) {
            arr.push(n);
            break;
        }

        arr.push(n % b);
        n = Math.floor(n / b);
    }

    return arr.reverse().join('');
}

console.log(calculate(N, B));

