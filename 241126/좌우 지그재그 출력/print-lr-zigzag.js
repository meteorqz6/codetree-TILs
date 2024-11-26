const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let arr = Array(n).fill(0).map(() => Array(n).fill(0));
let num = 1;

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = num;
            num += 1;
        }
    } else {
        for (let j = n - 1; j >= 0; j--) {
            arr[i][j] = num;
            num += 1;
        }
    }
}

console.log(arr.map((row) => row.join(' ')).join('\n'));