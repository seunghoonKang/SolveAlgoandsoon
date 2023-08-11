const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let input = fs.readFileSync(path).toString().trim();

input = Number(input);

const dp = new Array(input).fill(0);
dp[0] = 0;
dp[1] = 0;
dp[2] = 1;
dp[3] = 0;

for (let i = 4; i <= input; i++) {
  if (dp[i - 1] === 0) {
    dp[i] = 1;
  } else {
    dp[i] = 0;
  }
}

console.log(dp[input] === 0 ? "SK" : "CY");
