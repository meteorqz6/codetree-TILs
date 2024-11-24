const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let str = input[0].split(' ')[0];
const len = str.length;
const n = Number(input[0].split(' ')[1]);

for (let i = 1; i <= n; i++) {
    let rule = Number(input[i]);
    if (rule === 1) {
        str = str.slice(1,len) + str[0];
    } else if (rule === 2) {
        str = str[len - 1] + str.slice(0, len - 1);
    } else {
        str = str.split('').reverse().join('');
    }
    console.log(str);
}