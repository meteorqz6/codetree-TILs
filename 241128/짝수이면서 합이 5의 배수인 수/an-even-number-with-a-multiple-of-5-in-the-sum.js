function isMagicNumber(n) {
    let sum = parseInt(n / 10) + n % 10;
    return n % 2 === 0 && sum % 5 === 0;
}

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

if (isMagicNumber(n)) {
    console.log('Yes');
} else {
    console.log('No');
}