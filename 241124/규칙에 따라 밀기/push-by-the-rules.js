const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let string = input[0];
const len = string.length;
const rule = input[1];

for (let str of rule) {

    if (str === 'L') {
        string = string.slice(1, len) + string[0];
    } else {
        string = string[len - 1] + string.slice(0, len - 1);
    }
}

console.log(string);