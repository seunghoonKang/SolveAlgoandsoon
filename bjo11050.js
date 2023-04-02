let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;
let a = 1;
let b = 1;

for (let i = 0; i < k; i++) {
  a *= n - i;
  b *= k - i;
}

console.log(a / b);
