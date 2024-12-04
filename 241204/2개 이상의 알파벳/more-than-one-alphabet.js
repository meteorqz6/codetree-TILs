const fs = require('fs');
const strArr = fs.readFileSync(0).toString().trim().split('');

function unique(arr) {
    let uniqueSet = new Set(arr);
    let uniqueArr = [...uniqueSet];
    return uniqueArr;
}

let result = unique(strArr);

if (result.length >= 2) {
    console.log('Yes');
} else {
    console.log('No');
}