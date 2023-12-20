const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const n = fs.readFileSync(path).toString().trim();

console.log(n);
console.log(1);
