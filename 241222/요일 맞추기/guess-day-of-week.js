const fs = require('fs');
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().split(' ').map(Number);
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let date1 = 0;
let date2 = 0;

for (let i = 0; i < m1 - 1; i++) {
    date1 += days[i];
}
date1 += d1;

for (let i = 0; i < m2 - 1; i++) {
    date2 += days[i];
}
date2 += d2;

let rest1 = date1 % 7;
let rest2 = date2 % 7;
let arr = [rest1, (rest1 + 1) % 7, (rest1 + 2) % 7, (rest1 + 3) % 7, (rest1 + 4) % 7, (rest1 + 5) % 7, (rest1 + 6) % 7];
let result;

for (let i = 0; i < arr.length; i++) {
    if (rest2 === arr[i]) {
        result = i;
        break;
    }
}

if (result === 0) {
    console.log('Mon');
} else if (result === 1) {
    console.log('Tue');
} else if (result === 2) {
    console.log('Wed');
} else if (result === 3) {
    console.log('Thu');
} else if (result === 4) {
    console.log('Fri');
} else if (result === 5) {
    console.log('Sat');
} else {
    console.log('Sun');
}