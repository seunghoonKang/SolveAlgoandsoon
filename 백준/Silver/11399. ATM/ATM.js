const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [_, P] = fs.readFileSync(path).toString().trim().split(`\n`);

P = P.split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const increaseTime = P.map((_, index) =>
  P.slice(0, index + 1).reduce((sum, curr) => sum + curr)
);

let res = increaseTime.reduce((sum, curr) => sum + curr);
console.log(res);