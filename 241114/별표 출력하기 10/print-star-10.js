const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n * 2; i++) {
    str = '';
    if (i % 2 === 0) {
        for (let j = 0; j < 1 + i / 2; j++) {
            str += "* ";
        }
    } else {
        for (let k = 0; k < n - (i - 1) / 2; k++) {
            str += "* ";
        }
    }
    console.log(str);
}