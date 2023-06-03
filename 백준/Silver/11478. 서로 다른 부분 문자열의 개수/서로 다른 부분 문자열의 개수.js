const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let input = fs.readFileSync(path).toString().trim();
let set = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length + 1; j++) {
    set.add(input.slice(i, j));
  }
}
console.log(set.size);
