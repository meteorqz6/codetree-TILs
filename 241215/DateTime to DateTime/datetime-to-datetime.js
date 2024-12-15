const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const [a, b, c] = input[0].split(' ').map(Number);
const minute = 11 * 24 * 60 + 11 * 60 + 11;
const inputMinute = a * 24 * 60 + b * 60 + c;

if (a === 11 && b < 11) {
    console.log(-1);
}

else if (a === 11 && b === 11 && c < 11) {
    console.log(-1);
}

else {
    console.log(inputMinute - minute);
}
