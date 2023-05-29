let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ");
const S = input.slice(1, +N + 1);
const checkString = input.slice(+N + 1);
const set = new Set(S);
let count = 0;
for (let i = 0; i < checkString.length; i++) {
  set.has(checkString[i]) ? count++ : count;
}
console.log(count);