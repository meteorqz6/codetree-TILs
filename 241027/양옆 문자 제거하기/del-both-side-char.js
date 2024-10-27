const fs = require('fs');
const str = fs.readFileSync(0).toString().trim();
console.log(str.slice(0,1) + str.slice(2,-2) + str.slice(-1));