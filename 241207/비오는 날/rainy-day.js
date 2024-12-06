class Weather {
    constructor(date, week, weather) {
        this.date = date;
        this.week = week;
        this.weather = weather;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    let [date, week, weather] = input[i].split(' ');
    if (weather === "Rain") {
        arr.push(new Weather(date, week, weather));
    }
}

let targetIdx = 0;

for (let i = 1; i < arr.length; i++) {
    let year = Number(arr[i].date.split('-')[0]);
    let month = Number(arr[i].date.split('-')[1]);
    let day = Number(arr[i].date.split('-')[2]);

    let targetYear = Number(arr[targetIdx].date.split('-')[0]);
    let targetMonth = Number(arr[targetIdx].date.split('-')[1]);
    let targetDay = Number(arr[targetIdx].date.split('-')[2]);

    if (year < targetYear) {
        targetIdx = i;
    } else if (year == targetYear) {
        if (month < targetMonth) {
            targetIdx = i;
        } else if (month == targetMonth) {
            if (day < targetDay) {
                targetIdx = i;
            }
        }
    }
}

console.log(arr[targetIdx].date, arr[targetIdx].week, arr[targetIdx].weather);

