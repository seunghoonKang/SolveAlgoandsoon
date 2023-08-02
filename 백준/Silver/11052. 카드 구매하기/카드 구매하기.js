const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [n, arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const N = Number(n);
const cards = arr.split(" ").map(Number);
const dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
  }
}

console.log(dp[N]);