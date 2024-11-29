function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return parseInt(a / b);
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let o = input[1];
let b = Number(input[2]);

if (o === '+') {
    console.log(`${a} ${o} ${b} = ${add(a, b)}`);
} else if (o === '-') {
    console.log(`${a} ${o} ${b} = ${subtract(a, b)}`);
} else if (o === '*') {
    console.log(`${a} ${o} ${b} = ${multiply(a, b)}`);
} else if (o === '/') {
    console.log(`${a} ${o} ${b} = ${divide(a, b)}`);
} else {
    console.log('False');
}