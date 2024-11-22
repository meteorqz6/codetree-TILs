const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    if (i === 0 || i === n - 1) {
        for (let j = 0; j < n; j++) {
            str += '* ';
        }
    }
    else {
        for (let j = 0; j < n; j++) {
            if (j < i) {
                str += '* ';
            } else if (j === n - 1) {
                str += '*';
            } else {
                str += '  ';
            }
        }
    }
    console.log(str);
}