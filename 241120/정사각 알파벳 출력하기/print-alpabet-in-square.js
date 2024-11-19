const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let index = 65;
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        str += String.fromCharCode(index);
        index++;
    }
    console.log(str);
}