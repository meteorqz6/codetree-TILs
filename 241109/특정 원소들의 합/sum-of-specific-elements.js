const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr2d = [];

for(let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(' ').map(Number));
}

let sum = arr2d[0][0] + arr2d[1][0] + arr2d[1][1] + arr2d[2][0] + arr2d[2][1] + arr2d[2][2] + arr2d[3][0] + arr2d[3][1] + arr2d[3][2] + arr2d[3][3];

console.log(sum);