const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let exist = 0;

for(let num of arr) {
    if(num == 0){
        exist = 1;
        break;
    }
}

if(exist === 1){
    console.log(arr.slice(0,arr.length-1).reverse().join(' '));
} else {
    console.log(arr.reverse().join(' '));
}