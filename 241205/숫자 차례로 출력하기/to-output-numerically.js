function printNum(n) {
    if (n === 0) {
        return;
    }
    printNum(n - 1);
    process.stdout.write(n + ' ');
}

function printReverseNum(n) {
    if (n === 0) {
        return;
    }
    process.stdout.write(n + ' ');
    printReverseNum(n - 1);
}

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

printNum(n);
process.stdout.write("\n");
printReverseNum(n);