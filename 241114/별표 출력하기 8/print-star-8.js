const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    if (i % 2 === 0) {
        str += '*';
    } else {
        for (let j = 0; j < i + 1; j++) {
            str += '* ';
        }
    }
    console.log(str);
}