const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [testCase, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

arr = arr.map((i) => i.split(" ").map(Number));

const dp = new Array(Number(testCase)).fill(0);
dp[0] = arr[0][0];

for (let i = 1; i < testCase; i++) {
  dp[i] += Math.max(arr[0][i], dp[i - 1] + arr[0][i]);
}

console.log(Math.max(...dp));
