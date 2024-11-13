const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = n - i - 1; j > 0; j--) {
        str += ' ';
    }
    for (let k = 0; k <= i; k++) {
        str += '* ';
    }
    console.log(str);
}

for (let i = 0; i < n - 1; i++) {
    str = '';
    for (let j = 0; j <= i; j++) {
        str += ' ';
    }
    for (let k = n - i - 1; k > 0; k--) {
        str += '* ';
    }
    console.log(str);
}

