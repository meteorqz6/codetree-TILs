const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);
let str = '';

for (let i = 2; i <= 8; i += 2) {
    str = '';
    for (let j = input[1]; j >= input[0]; j--) {
        str += `${j} * ${i} = ${j * i}`;
        if (j !== input[0]) {
            str += ` / `;
        }
    }
    console.log(str);
}