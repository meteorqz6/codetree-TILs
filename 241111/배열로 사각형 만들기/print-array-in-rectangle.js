const n = 5;
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let j = 0; j < n; j++) {
    arr2d[0][j] = 1;
    arr2d[j][0] = 1;
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        arr2d[i][j] = arr2d[i - 1][j] + arr2d[i][j - 1];
    }
}

console.log(arr2d.map((row) => row.join(' ')).join('\n'));