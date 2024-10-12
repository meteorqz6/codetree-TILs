const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if(10<=input&&input<=20) {
    console.log('yes');
} else {
    console.log('no');
}