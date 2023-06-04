const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let [N, ...arr] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < N; i++) {
  let [A, B] = arr[i].split(" ").map(Number);
  let tempB = B;
  let tempA = A;
  while (A !== 0) {
    res = B % A;
    B = A;
    A = res;
  }
  console.log((tempB * tempA) / B);
}
