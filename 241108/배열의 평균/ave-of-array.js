const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];
let rowAvgVal = [];
let columnAvgVal = [];
let totalSumVal = 0;

for(let i = 0; i < 2; i++) {
    arr2d.push(input[i].split(' ').map(Number));
}

for(let i = 0; i < 2; i++) {
    let rowSumVal = 0;
    for(let j = 0 ; j < 4; j++) {
        rowSumVal += arr2d[i][j];
        totalSumVal += arr2d[i][j];
    }
    rowAvgVal.push((rowSumVal/4).toFixed(1));
}

for(let i = 0; i < 4; i++) {
    let columnSumVal = 0;
    for(let j = 0 ; j < 2; j++) {
        columnSumVal += arr2d[j][i];
    }
    columnAvgVal.push((columnSumVal/2).toFixed(1));
}

console.log(...rowAvgVal);
console.log(...columnAvgVal);
console.log((totalSumVal/8).toFixed(1));