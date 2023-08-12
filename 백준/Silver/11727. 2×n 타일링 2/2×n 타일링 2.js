const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let input = fs.readFileSync(path).toString().trim();
input = Number(input);

const dp = [0, 1, 3];

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}

console.log(dp[input]);
