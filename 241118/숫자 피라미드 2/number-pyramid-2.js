const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';
let cnt = 1;

for (let i = 1; i <= n; i++) {
    str = '';
    for (let j = 0; j < i; j++) {
        str += cnt + ' ';
        cnt++;
    }
    console.log(str);
}