const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCases, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const sortedTimesArr = arr
  .map((time) => time.split(" ").map(Number))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let answer = 0;
let tempTime = 0;

sortedTimesArr.forEach((time) => {
  if (time[0] >= tempTime) {
    answer++;
    tempTime = time[1];
  }
});

console.log(answer);
