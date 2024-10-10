const fs = require('fs');
let a = Number(fs.readFileSync(0).toString());
if (a < 0) {
    console.log('ice');
} else if (a < 100) {
    console.log('water');
} else {
    console.log('vapor');
}