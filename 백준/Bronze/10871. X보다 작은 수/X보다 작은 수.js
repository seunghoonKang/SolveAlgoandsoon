const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [NX, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

NX = NX.split(" ").map(Number);
const [N, X] = NX;

arr = arr[0].split(" ").map(Number);

const result = [];

for (const number of arr) {
  if (number < X) result.push(number);
}

console.log(result.join(" "));