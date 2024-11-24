const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let strA = input[0];
let lenA = strA.length;
const strB = input[1];
const lenB = strB.length;

while (lenA > lenB) {
    // console.log(lenA);
    for (let i = 0; i < lenA - lenB + 1; i++) {
        let str = strA.slice(i, i + lenB);

        if (str === strB) {
            let start = i;
            let end = i + lenB;
            strA = strA.slice(0, start) + strA.slice(end);
            lenA = strA.length;
            break;
        }
    }
}

if(strA === strB){
    console.log();
} else {
    console.log(strA);
}

