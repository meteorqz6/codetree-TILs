const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const n = input[0];
const m = input[1];
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let num = 1;

for (let start = 0; start < n + m - 1; start++) {
    let row = start < m ? 0 : start - m + 1; // 대각선의 시작 행
    let col = start < m ? start : m - 1;    // 대각선의 시작 열

    while (row < n && col >= 0) {
        arr2d[row][col] = num++;
        row++;
        col--;
    }
}

console.log(arr2d.map((row) => row.join(' ')).join('\n'));
