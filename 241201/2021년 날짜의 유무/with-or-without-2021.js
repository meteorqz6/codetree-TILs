function date(m, d) {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        if (1 <= d && d <= 31) {
            return true;
        } else {
            return false;
        }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        if (1 <= d && d <= 30) {
            return true;
        } else {
            return false;
        }

    } else if (m === 2) {
        if (1 <= d && d <= 28) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
let [M, D] = input.map(Number);
let result = date(M, D);
if (result) console.log('Yes');
else console.log('No');