const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if(3<=input&&input<=5) {
    console.log('Spring');
} else if (6<=input&&input<=8) {
    console.log('Summer');
} else if (9<=input&&input<=11) {
    console.log('Fall');
} else {
    console.log('Winter');
}