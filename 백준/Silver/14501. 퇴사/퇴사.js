const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [counseling, ...arr] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(`\n`);

const TP = arr.map((i) => i.split(" ").map(Number));
const dp = new Array(Number(counseling)).fill(0);

for (let i = 0; i < counseling; i++) {
  const [T, P] = TP[i];
  if (i + T > counseling) continue;
  dp[i] += P;
  for (let j = i + T; j < counseling; j++) {
    dp[j] = Math.max(dp[i], dp[j]);
  }
}

console.log(Math.max(...dp));
