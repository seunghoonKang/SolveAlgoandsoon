let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

let res = [];

for (let i = 0; i < 30; i++) {
  if (input[i] !== i + 1) {
    res.push(i + 1);
    input.splice(i, 0, i + 1);
  }
}
console.log(res.join("\n"));
