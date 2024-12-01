function partstr(a, b) {
    let isPartStr = true;

    if (a.length < b.length) return false;

    for (let i = 0; i <= a.length - b.length; i++) {
            isPartStr = true;
            for (let j = 0; j < b.length; j++) {
                if (b[j] !== a[i + j]) {
                    isPartStr = false;
                    break;
                }
            }
            if (isPartStr) return isPartStr;
        }

    return isPartStr;
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = input[1].split(' ').map(Number);
let b = input[2].split(' ').map(Number);
let result = partstr(a, b);

if (result) console.log('Yes');
else console.log('No');