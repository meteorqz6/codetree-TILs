const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findLCMArray(arr, idx) {
    if (idx === 1) return lcm(arr[0], arr[1]);
    return lcm(findLCMArray(arr, idx - 1), arr[idx]);
}

const result = findLCMArray(arr, n - 1);
console.log(result);