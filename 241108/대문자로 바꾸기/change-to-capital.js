const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr2d = [];

for(let i = 0; i < 5; i++) {
    arr2d.push(input[i].split(' '));
}

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 3; j++) {
        arr2d[i][j] = arr2d[i][j].toUpperCase();
    }
}

console.log(arr2d.map(row => row.join(' ')).join('\n'));