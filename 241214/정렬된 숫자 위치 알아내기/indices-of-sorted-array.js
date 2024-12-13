class Num {
    constructor(num, index) {
        this.num = num;
        this.index = index;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let numbers = [];

for (let i = 0; i < n; i++) {
    numbers.push(new Num(arr[i], i + 1));
}

numbers.sort((a, b) => {
    if (a.num !== b.num) {
        return a.num - b.num;
    }
    return a.index - b.index;
})

let result = Array(n);
for (let i = 0; i < n; i++) {
    result[numbers[i].index - 1] = i + 1;
}

console.log(result.join(' '));