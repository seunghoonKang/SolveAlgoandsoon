let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("./input.txt").toString().trim();
let n = Number(input);

let count = 1;
let result = 1;

while (result < n) {
  if (n === 1) return console.log(1);
  result += 6 * count;
  count++;
}
console.log(count);
