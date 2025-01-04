const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const n = Number(input[0]);
let arr2d = [];

for (let i = 1; i <= n; i++) {
    let arr = input[i].split(' ').map(Number);
    arr2d.push(arr);
}
// console.log(arr2d);

function getNumOfGold(rowS, rowE, colS, colE) {
    let numOfGold = 0;
    for (let row = rowS; row <= rowE; row++) {
        for (let col = colS; col <= colE; col++) {
            numOfGold += arr2d[row][col];
        }
    }
    return numOfGold;
}

let maxGold = 0;

for (let row = 0; row <= n - 3; row++) {
    for (let col = 0; col <= n - 3; col++) {
        const numOfGold = getNumOfGold(row, row + 2, col, col + 2);
        maxGold = Math.max(maxGold, numOfGold);
    }
}

console.log(maxGold);