const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for ( let i = 0; i < n; i++ ) {
    str = '';
    for ( let j = n - 1 - i; j > 0; j-- ) {
        str += '  ';
    }
    for ( let k = 0; k < i + 1; k++ ) {
        str += '@ ';
    }
    console.log(str);
}

for ( let i = 0; i < n - 1; i++ ) {
    str = '';

    for ( let j = n - 1 - i; j > 0; j-- ) {
        str += '@ ';
    }
    console.log(str);
}