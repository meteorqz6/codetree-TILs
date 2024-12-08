function findMaxRecursive(arr, n) {
    if (n === 1) {
        return arr[0];
    }

    const maxOfRest = findMaxRecursive(arr, n - 1);
    return Math.max(maxOfRest, arr[n - 1]);
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
const result = findMaxRecursive(arr, n);
console.log(result);

