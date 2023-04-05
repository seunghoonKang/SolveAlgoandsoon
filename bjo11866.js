let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;

const arr = new Array(1 * n).fill().map((_, i) => i + 1);
let pointer = 0;
let res = [];
for (let i = 0; i < n; i++) {
  pointer = (pointer + k - 1) % arr.length;
  res.push(arr.splice(pointer, 1));
}

console.log(`<${res.join(", ")}>`);
