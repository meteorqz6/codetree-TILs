function abs(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.abs(arr[i]));
    }
    return result;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[1].split(' ').map(Number);
console.log(abs(arr).join(' '));