// let str = "";

// for (let i = 1; i < 3; i++) {
//     str = "";
//     for (let j = 1; j < 5; j++) {
//         str += i * j;
//     }
//     console.log(str);
// }

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const a = input[0];
const b = input[1];
let str = '';

for (let i = 1; i <= a; i++) {
    str = '';
    for (let j = 1; j <= b; j++) {
        str += i * j;
        str += ' ';
    }
    console.log(str);
}