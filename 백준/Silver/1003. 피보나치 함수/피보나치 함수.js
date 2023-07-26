const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCases, ...arr] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(`\n`)
  .map(Number);

for (let i = 0; i < testCases; i++) {
  const dp = [];
  dp[0] = [1, 0];
  dp[1] = [0, 1];
  for (let j = 2; j <= arr[i]; j++) {
    dp[j] = [dp[j - 1][0] + dp[j - 2][0], dp[j - 1][1] + dp[j - 2][1]];
  }

  console.log(dp[arr[i]].join(" "));
}
