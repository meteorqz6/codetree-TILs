const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let arr = Array(n).fill(0).map(() => Array(n).fill(0));
let cnt;

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        cnt = 1;
        for (let j = 0; j < n; j++) {
            arr[j][i] = cnt;
            cnt++;
        }
    } else {
        cnt = 1;
        for (let j = n - 1; j >= 0; j--) {
            arr[j][i] = cnt;
            cnt++;
        }
    }

}
console.log(arr.map((row) => row.join('')).join('\n'));