const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [N, P] = fs.readFileSync(path).toString().trim().split(`\n`);

const result = [];

P = P.split(" ")
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  let temp = 0;
  for (let j = 0; j <= i; j++) {
    temp += P[j];
  }
  result.push(temp);
}

let res = result.reduce((sum, curr) => sum + curr);
console.log(res);
