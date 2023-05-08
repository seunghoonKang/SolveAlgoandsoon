let fs = require("fs");
let [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log((BigInt(A) + BigInt(B)).toString());
