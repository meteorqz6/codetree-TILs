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

function findLCMArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    if (arr.length === 2) {
        return lcm(arr[0], arr[1])
    } else {
        const a = arr[0];
        arr.shift();
        const b = findLCMArray(arr);
        return lcm(a, b);
    }
}

const result = findLCMArray(arr);
console.log(result);