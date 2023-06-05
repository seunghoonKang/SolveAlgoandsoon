const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let input = fs.readFileSync(path).toString().trim();

let [A, B] = input.split(" ").map(Number);
let tempB = B;
let tempA = A;
while (A !== 0) {
  res = B % A;
  B = A;
  A = res;
}
console.log((tempB * tempA) / B);
