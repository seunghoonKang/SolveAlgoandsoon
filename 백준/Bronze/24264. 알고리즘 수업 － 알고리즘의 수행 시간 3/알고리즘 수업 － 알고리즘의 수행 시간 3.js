const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const n = fs.readFileSync(path).toString().trim();

console.log(n*n);
console.log(2);
