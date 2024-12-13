const fs = require('fs');
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().split(' ').map(Number);
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let day1 = 0;
for (let i = 1; i < m1; i++) {
    day1 += num_of_days[i];
}
day1 += d1;

let day2 = 0;
for (let i = 1; i < m2; i++) {
    day2 += num_of_days[i];
}
day2 += d2;

console.log(day2 - day1 + 1);