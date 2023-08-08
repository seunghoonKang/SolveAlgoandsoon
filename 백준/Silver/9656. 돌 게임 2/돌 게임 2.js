const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

const dp = new Array(Number(input) + 1).fill(0);

dp[1] = 1;
dp[2] = 0;
dp[3] = 1;

for (let i = 4; i <= input; i++) {
  if (dp[i - 1] === 1 && dp[i - 3] === 1) {
    dp[i] = 0;
  } else {
    dp[i] = 1;
  }
}
console.log(dp[input] === 0 ? "SK" : "CY");
