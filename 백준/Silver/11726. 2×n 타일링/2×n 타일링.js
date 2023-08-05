const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

const dp = [0, 1, 2];

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[input]);
