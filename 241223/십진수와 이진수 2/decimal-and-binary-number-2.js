const fs = require('fs');
const binary = fs.readFileSync(0).toString().split('').map(Number);
let result = 0;
for (let i = 0; i < binary.length; i++) {
    result = result * 2 + binary[i];
}

result *= 17;
let arr = [];

while (true) {
    
    if (result < 2) {
        arr.push(result);
        break;
    }
    arr.push(result % 2);
    result = Math.floor(result / 2);
}

console.log(arr.reverse().join(''));