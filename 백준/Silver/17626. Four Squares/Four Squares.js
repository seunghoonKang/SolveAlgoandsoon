const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let input = fs.readFileSync(path).toString().trim();

const dp = new Array(Number(input)).fill(0);

for (let i = 1; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}
console.log(dp[input]);
