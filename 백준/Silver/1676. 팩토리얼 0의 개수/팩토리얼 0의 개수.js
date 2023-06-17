const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let input = fs.readFileSync(path).toString().trim();

let count = 0;

for (let i = 2; i <= input; i++) {
  if (i % 5 === 0) count++;
  if (i % 25 === 0) count++;
  if (i % 125 === 0) count++;
}
console.log(count);