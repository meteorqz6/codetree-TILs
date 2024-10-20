const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());


for(let i = 0; i < 2; i++) {
    for(let j = 0; j < n; j++) {
        let str = "";
        for(let k = 0; k < n; k++) {
            str += '*';
        }
        console.log(str);
    }
    console.log();
}