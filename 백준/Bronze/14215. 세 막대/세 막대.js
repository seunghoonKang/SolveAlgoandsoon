let fs = require("fs");
let [A, B, C] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((x, y) => x - y);

if (A + B > C) {
  console.log(A + B + C);
} else {
  console.log((A + B) * 2 - 1);
}
