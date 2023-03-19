const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");

let res = 0;
input.forEach((i) => (res += i * i));

console.log(res % 10);
