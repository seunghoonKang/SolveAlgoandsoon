const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [n, arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const N = Number(n);
const sequence = arr.split(" ").map(Number);
const dp = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (dp[j] > max && sequence[j] > sequence[i]) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
