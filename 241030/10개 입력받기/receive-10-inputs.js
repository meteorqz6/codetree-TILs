let arr = Array(10);

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum = 0;
let idx;
for(let i = 0; i < 10; i++){
    arr[i] = input[i];
    if(arr[i] === 0){
        idx = i;
        break;
    }
}

for(let i = 0; i < idx; i++){
    sum += arr[i];
}
console.log(sum, (sum/4).toFixed(1));