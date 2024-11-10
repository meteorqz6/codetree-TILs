const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);

let arr1 = Array(n).fill(0).map(() => Array(m).fill(0));
let arr2 = Array(n).fill(0).map(() => Array(m).fill(0));
let result = Array(n).fill(0).map(() => Array(m).fill(0));

for (let i = 0; i < n; i++) {
    arr1[i] = input[i + 1].split(' ').map(Number);
}

for (let i = 0; i < n; i++) {
    arr2[i] = input[i + 1 + n].split(' ').map(Number);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            result[i][j] = 0;
        } else {
            result[i][j] = 1;
        }
    }
}

console.log(result.map((row) => row.join(' ')).join('\n'));