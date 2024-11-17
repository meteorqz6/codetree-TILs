const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);
let str = '';

for (let i = 1; i <= 9; i++) {
    str = '';
    for (let j = input[1]; j >= input[0]; j -= 2) {
        str += `${j} * ${i} = ${j*i} `;
        if(j!==input[0]) {
            str += '/ ';
        }
    }
    console.log(str);
}