const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = input.charCodeAt() + 1;
if(input==='z'){
    console.log(String.fromCharCode(65));
} else {
    console.log(String.fromCharCode(n));
}


// console.log(String.fromCharCode(65));
//    console.log(String.fromCharCode(66));

// 'A'
// 'B'