function year(n) {
    if (n % 100 === 0 && n % 400 !== 0) {
        return false;
    } 
    else if (n % 4 !== 0) {
        return false;
    }
    return true;
}

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
console.log(year(n));