function include369(n) {
    let char = n.toString().split('');
    return char.includes('3') || char.includes('6') || char.includes('9');

}

function isMagicNumber(n) {
    return n % 3 === 0 || include369(n);
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input.map(Number);

let cnt = 0;
for (let i = a; i <= b; i++) {
    if (isMagicNumber(i)) {
        cnt++;
    }
}

console.log(cnt);