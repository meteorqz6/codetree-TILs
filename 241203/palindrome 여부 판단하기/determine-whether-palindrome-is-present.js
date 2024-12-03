function palindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    if (reverseStr === str) {
        return true;
    } else {
        return false;
    }
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

if (palindrome(input)) {
    console.log('Yes');
} else {
    console.log('No');
}