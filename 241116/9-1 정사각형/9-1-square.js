const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let idx = 0;
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        if (idx === 9) {
            idx = 0;
        }
        str += arr[idx];
        idx++;
    }
    console.log(str);
}