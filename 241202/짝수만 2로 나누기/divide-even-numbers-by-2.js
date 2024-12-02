function modify(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] /= 2;
        }
    }
    return arr;
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[1].split(' ').map(Number);
console.log(modify(arr).join(' '));