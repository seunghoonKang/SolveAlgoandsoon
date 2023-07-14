const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [month, day] = fs.readFileSync(path).toString().trim().split(" ");

const Days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let findDay = new Date(`${month} ${day}, 2007`).getDay();

const res = Days.filter((_, index) => index === findDay);
console.log(res[0]);