let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const chess = [1, 1, 2, 2, 2, 8];
const res = [];

for (let i = 0; i < input.length; i++) {
  res.push(chess[i] - Number(input[i]));
}
console.log(res.join(" "));