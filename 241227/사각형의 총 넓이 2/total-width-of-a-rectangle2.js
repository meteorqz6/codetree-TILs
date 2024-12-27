const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = Array(201).fill(0).map(() => Array(201).fill(0));
const OFFSET  = 100;
let cnt = 0;

for (let i = 1; i <= n; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    for (let j = x1 + OFFSET; j < x2 + OFFSET; j++) {
        for (let k = y1 + OFFSET; k < y2 + OFFSET; k++) {
            arr[j][k] = 1;
        }
    }
}

for (let i = 0; i < 201; i++) {
    for (let j = 0; j < 201; j++) {
        if (arr[i][j] === 1) {
            cnt++;
        }
    }
}

console.log(cnt);

