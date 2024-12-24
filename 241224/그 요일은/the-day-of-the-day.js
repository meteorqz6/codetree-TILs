const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

function num0fDays(m, d) {
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    for (let i = 1; i < m; i++) {
        totalDays += days[i];
    }

    totalDays += d;
    return totalDays;
}

let diff = num0fDays(m2, d2) - num0fDays(m1, d1);
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let cnt = 0;
let start;

for (let i = 0; i < 7; i++) {
    if (A === dayOfWeek[i]) {
        start = i;
    }
}

while (true) {
    if (start > diff) {
        break;
    }
    cnt++;
    start += 7;
}

console.log(cnt);