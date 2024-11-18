const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = i; j >= 0; j--) {
        str += n - j + ' ';
    }
    console.log(str);
}