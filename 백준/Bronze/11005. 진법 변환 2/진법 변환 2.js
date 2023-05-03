let fs = require("fs");
let [N, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(N.toString(B).toUpperCase());