function printRec(n) {
    let num = 1;
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (num === 10) {
                num = 1;
            }
            str += num + ' ';
            num++;
        }
        console.log(str);
    }
}

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
printRec(n);