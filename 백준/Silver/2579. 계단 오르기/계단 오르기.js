const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCases, ...arr] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(`\n`)
  .map(Number);

const dp = new Array(testCases).fill(0);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < testCases; i++) {
  dp[i] = Math.max(arr[i] + dp[i - 2], arr[i] + arr[i - 1] + dp[i - 3]);
}
console.log(dp[testCases - 1]);
