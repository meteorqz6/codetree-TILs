const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const firstChar = input[0];
const secondChar = input[1];
const arr = input.split('');
for(let i = 0; i < arr.length; i++){
    if(arr[i] === secondChar){
        arr[i] = firstChar;
    }
}
console.log(arr.join(''));