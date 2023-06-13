const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let [N, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let stack = [];
for (let i = 0; i < N; i++) {
  if (input[i] === 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

console.log(stack.reduce((prev, curr) => prev + curr, 0));
