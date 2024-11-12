// 3 0(0) 3
// 2 2(1) 2
// 1 4(2) 1

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = n - i; j > 0; j--) {
        str += '*';
    }
    for (let k = 0; k < i * 2; k++) {
        str += ' ';
    }
    for (let k = n - i; k > 0; k--) {
        str += '*';
    }
    console.log(str);
}