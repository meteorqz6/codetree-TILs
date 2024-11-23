const fs = require('fs');
const str = fs.readFileSync(0).toString().trim();
let idx;
let result;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') {
        idx = i;
        break;
    }
}

result = str.slice(0, idx) + str.slice(idx + 1);
console.log(result);