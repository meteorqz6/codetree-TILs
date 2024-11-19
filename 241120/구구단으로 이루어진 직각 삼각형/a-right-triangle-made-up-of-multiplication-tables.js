const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 1; i <= n; i++) {
    str = '';
    for (let j = 1; j <= n - i + 1; j++) {
        str += `${i} * ${j} = ${i*j}`;
        if(j!== n - i + 1) {
            str += ' / ';
        }
    }
    console.log(str);
}