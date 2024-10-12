const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

if(input%3==0) {
    console.log('YES');
} else {
    console.log('NO');
}

if(input%5==0) {
    console.log('YES');
} else {
    console.log('NO');
}