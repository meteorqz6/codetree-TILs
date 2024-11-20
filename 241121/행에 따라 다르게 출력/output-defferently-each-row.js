const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';
let start = 1;

for (let i = 0; i < n; i++) {
    str = '';
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
            str += start + ' ';
            if(j === n - 1) {
                start += 2;
            } else {
                start++;
            }
        }

    } else {
        for (let j = 0; j < n; j++) {
            str += start + ' ';
            if(j === n - 1) {
                start ++;
            } else {
                start += 2;
            }
        }
    }
    console.log(str);
}