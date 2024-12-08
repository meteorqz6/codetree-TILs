const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, k, T] = input[0].split(' ');
n = Number(n);
k = Number(k);
// console.log(n, k, T.length);
let arr = [];
for (let i = 1; i <= n; i++) {
    let str = input[i];
    // console.log(str.slice(0, T.length));
    if (str.slice(0, T.length) === T) {
        // console.log(str);
        arr.push(str);
    }
}

let result = arr.sort()[k - 1];
console.log(result);