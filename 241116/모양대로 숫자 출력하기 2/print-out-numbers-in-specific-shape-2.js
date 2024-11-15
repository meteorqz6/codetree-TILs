const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
const arr = [2, 4, 6, 8];
let str = '';
let idx = 0;

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        if (idx === 4) {
            idx = 0;
        }
        str += arr[idx] + ' ';
        idx++;
    }
    console.log(str);
}