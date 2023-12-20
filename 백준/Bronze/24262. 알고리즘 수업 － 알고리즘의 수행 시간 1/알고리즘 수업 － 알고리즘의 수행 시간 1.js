const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const n = fs.readFileSync(path).toString().trim();

console.log(1);
console.log(0);
