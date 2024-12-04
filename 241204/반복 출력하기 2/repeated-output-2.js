function print(n) {
    if (n === 0) {
        return;
    }
    print(n - 1);
    console.log("HelloWorld");
}

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
print(n);