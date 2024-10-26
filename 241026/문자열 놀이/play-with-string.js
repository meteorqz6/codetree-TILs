const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0].split(' ')[0];
const cnt = input[0].split(' ')[1];
const arr = str.split('');

for(let i = 1; i <= cnt; i++){
    if(input[i].split(' ')[0] == 1){
        let tmp = arr[Number(input[i].split(' ')[1])-1];
        arr[Number(input[i].split(' ')[1])-1] = arr[Number(input[i].split(' ')[2])-1];
        arr[Number(input[i].split(' ')[2])-1] = tmp;
        console.log(arr.join(''));
    } else{
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === input[i].split(' ')[1]){
                arr[j] = input[i].split(' ')[2];
            }
        }
        console.log(arr.join(''));
    }
}