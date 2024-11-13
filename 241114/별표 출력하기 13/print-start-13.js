const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < 2 * n; i++) {
    str = '';
    if (i % 2 === 0) {
        for (let j = 0; j < n - i / 2; j++) {
            str += '* ';
        }
    } else {
        for (let k = 0; k < i / 2; k++) {
            str += '* ';
        }
    }
    console.log(str);
}