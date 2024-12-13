const fs = require('fs');
const [h1, m1, h2, m2] = fs.readFileSync(0).toString().split(' ').map(Number);
let time1 = h1 * 60 + m1;
let time2 = h2 * 60 + m2;
console.log(time2 - time1);
