const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for(let i = 0; i < input.length; i++){
    if(input[i]==='END'){
        break;
    }
    let arr = input[i].split('');
    console.log(arr.reverse().join(''));
}