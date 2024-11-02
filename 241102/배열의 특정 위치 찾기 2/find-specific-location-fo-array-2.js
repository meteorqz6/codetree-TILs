const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sumEven = 0;
let sumOdd = 0;

for(let i = 0, j = 1; i < input.length; i+=2, j+=2){
    sumOdd += input[i];
    sumEven += input[j];
}

if(sumEven > sumOdd){
    console.log(sumEven - sumOdd);
} else {
    console.log(sumOdd - sumEven);
}