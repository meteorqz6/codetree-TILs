const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let arr2d = [];
let countArr = 0;

for (let i = 1; i <= n; i++) {
    let arr = input[i].split(' ').map(Number);
    arr2d.push(arr);
}

let cnt = 1;

for (let i = 0; i < n; i++) {
    if (cnt >= m) {
        countArr++;
    }
    cnt = 1;
    for (let j = 0; j < n - 1; j++) {
        if (arr2d[i][j] === arr2d[i][j + 1]) {
            cnt++;
        } else {
            cnt = 1;
        }
    }
}

cnt = 1;

for (let i = 0; i < n; i++) {
    if (cnt >= m) {
        countArr++;
    }
    cnt = 1;
    for (let j = 0; j < n - 1; j++) {
        if (arr2d[j][i] === arr2d[j + 1][i]) {
            cnt++;
        } else {
            cnt = 1;
        }
    }
}

console.log(countArr);