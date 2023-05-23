let fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

let res = input.reduce((acc, curr) => acc + curr);

console.log(res / 5);
console.log(input[2]);
