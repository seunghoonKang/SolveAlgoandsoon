const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCase, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const dp = [0, 1, 2, 4];
const answer = [];

for (let i = 0; i < testCase; i++) {
  let n = arr[i];
  for (let j = 4; j <= n; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  answer.push(dp[n]);
}

console.log(answer.join(`\n`));
