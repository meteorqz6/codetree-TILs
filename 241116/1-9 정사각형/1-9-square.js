const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let cnt = 1;
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        if (cnt%10 === 0) {
            cnt = 1;
        }
        str += cnt % 10;
        cnt++;
    }
    console.log(str);
}