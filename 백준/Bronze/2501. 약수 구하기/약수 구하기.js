let fs = require("fs");
let [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let res = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) res.push(i);
}

if (!res[K - 1]) {
  console.log(0);
} else {
  console.log(res[K - 1]);
}
