const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';
let index = 65;

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < i + 1; j++) {
        str += String.fromCharCode(index);
        if (String.fromCharCode(index) === 'Z') {
            index = 65;
        } else {
            index++;
        }
    }
    console.log(str);
}