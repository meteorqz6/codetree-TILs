const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = n - (i + 1); j > 0; j--) {
        str += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        str += '*';
    }
    console.log(str);
}

for (let i = 0; i < n - 1; i++) {
    str = '';
    for (let j = 0; j < i + 1; j++) {
        str += ' ';
    }
    for (let k = 2 * n - 2 * i - 3; k > 0; k--) {
        str += '*';
    }
    console.log(str);
}