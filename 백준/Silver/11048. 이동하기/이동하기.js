const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [NM, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const [N, M] = NM.split(" ").map(Number);
arr = arr.map((i) => i.split(" ").map(Number));

const dp = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    dp[i][j] +=
      arr[i - 1][j - 1] +
      Math.max(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
  }
}
console.log(dp[N][M]);
