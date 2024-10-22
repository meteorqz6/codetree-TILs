const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ');
arr = arr.map(Number);

let sumVal = 0;
let avgVal = 0;
let exist = 0;
let index;

for(let elem of arr) {
    if(elem >= 250){
        exist = 1;
        index = arr.indexOf(elem);
        break;
    }
}

if(exist === 1){
    for(let elem of arr.slice(0,index)) sumVal += elem;
    avgVal = (sumVal/index).toFixed(1);
} else {
    for(let elem of arr) sumVal += elem;
    avgVal = (sumVal/10).toFixed(1);
}

console.log(sumVal, avgVal);