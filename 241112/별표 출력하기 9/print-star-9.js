const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = n - i - 1; j > 0; j--) {
        str += '  ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        str += '* ';
    }
    console.log(str);
}