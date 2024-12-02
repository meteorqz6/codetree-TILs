function year(Y) {
    if (Y % 4 === 0) {
        if (Y % 100 === 0 && Y % 400 === 0) {
            return true;
        } else if (Y % 100 === 0) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}
function season(M) {
    if (3 <= M && M <= 5) {
        return 'Spring';
    } else if (6 <= M && M <= 8) {
        return 'Summer';
    } else if (9 <= M && M <= 11) {
        return 'Fall';
    } else {
        return 'Winter';
    }
}

function result(Y, M, D) {
    if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
        if (1 <= D && D <= 31) {
            return season(M);
        } else {
            return -1;
        }
    } else if (M === 4 || M === 6 || M === 9 || M === 11) {
        if (1 <= D && D <= 30) {
            return season(M);
        } else {
            return -1;
        }
    } else {
        if (year(Y)) {
            if (1 <= D && D <= 29) {
                return season(M);
            } else {
                return -1;
            }
        } else {
            if (1 <= D && D <= 28) {
                return season(M);
            } else {
                return -1;
            }
        }
    }
}
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [Y, M, D] = input.map(Number);
console.log(result(Y, M, D));