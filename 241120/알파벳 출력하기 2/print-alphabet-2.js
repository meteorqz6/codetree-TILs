const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let index = 65;
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < i ; j++) {
        str += '  ';
    }

    for (let k = 0; k < n - i; k++) {
        str += String.fromCharCode(index) + ' ';
        if (String.fromCharCode(index) === 'Z') {
            index = 65;
        } else {
            index++;
        }
    }
    console.log(str);
}