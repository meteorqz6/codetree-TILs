function partstr(a, b) {
    if (a.includes(b)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = input[1].split(' ').join('');
let b = input[2].split(' ').join('');
partstr(a, b);