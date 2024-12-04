function rule(n) {
    let arr = [n];
    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
        }
        arr.push(n);
    }
    return arr;
}

function sum(arr, idx) {
    let sum = 0;
    for (let i = 0; i < idx.length; i++) {
        sum += arr[idx[i] - 1];
    }
    return sum;
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let len = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);

console.log(sum(arr, rule(n)));