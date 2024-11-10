const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr2d1 = Array(3).fill(0).map(() => Array(3).fill(0));
let arr2d2 = Array(3).fill(0).map(() => Array(3).fill(0));
let result = Array(3).fill(0).map(() => Array(3).fill(0));

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        arr2d1[i][j] = Number(input[i].split(' ')[j]);
    }
}

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        arr2d2[i][j] = Number(input[i+4].split(' ')[j]);
    }
}

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        result[i][j] = arr2d1[i][j] * arr2d2[i][j];
    }
}

console.log(result.map(row => row.join(' ')).join('\n'));