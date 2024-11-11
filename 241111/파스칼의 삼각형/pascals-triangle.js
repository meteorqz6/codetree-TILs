const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

// for (let j = 0; j < n; j++) {
//     arr2d = Array(n).fill(0).map(() => Array(j).fill(0));
// }

for (let i = 0; i < n; i++) {
    arr2d[i][0] = 1;
    arr2d[i][i] = 1;
}

for (let i = 2; i < n; i++) {
    for (let j = 1; j < i; j++) {
        arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i - 1][j];
    }
}

let str = "";
for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j <= i; j++) {
        str += arr2d[i][j] + ' ';
    }
    console.log(str);
}