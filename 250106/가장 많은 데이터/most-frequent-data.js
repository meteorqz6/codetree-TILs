const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const freq = new Map();
let max = 0;

for (let i = 1; i <= n; i++) {
    let string = input[i];

    if (freq.has(string)) {
        freq.set(string, freq.get(string) + 1);

        if (max < freq.get(string)) {
            max = freq.get(string);
        }
    } else {
        freq.set(string, 1);
        if (max < freq.get(string)) {
            max = freq.get(string);
        }
    }
}

console.log(max);