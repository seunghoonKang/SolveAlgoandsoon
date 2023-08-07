const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCase, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const nmArray = arr.map((i) => i.split(" ").map(Number));

for (let i = 0; i < testCase; i++) {
  const [N, M] = nmArray[i];
  const dp = Array.from(Array(30), () => Array(30).fill(0));

  for (let j = 1; j <= N; j++) {
    for (let k = j; k <= M; k++) {
      if (j === k) {
        dp[j][k] = 1;
      } else if (j === 1) {
        dp[j][k] = k;
      } else {
        dp[j][k] = dp[j - 1][k - 1] + dp[j][k - 1];
      }
    }
  }

  console.log(dp[N][M]);
}
