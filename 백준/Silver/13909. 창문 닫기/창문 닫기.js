const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let input = fs.readFileSync(path).toString().trim();

let i = 1;
let answer = 0;
while (i * i <= input) {
  answer += 1;
  i += 1;
}
console.log(answer);
