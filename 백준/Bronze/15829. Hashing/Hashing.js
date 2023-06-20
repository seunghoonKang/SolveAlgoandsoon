const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [N, ...input] = fs.readFileSync(path).toString().trim().split("\n");

const alphabet = new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97));

let res = 0;
for (let i = 0; i < N; i++) {
  const findIndex = alphabet.indexOf(input[0][i]) + 1;
  let a = 31 ** i;
  res += a * findIndex;
}
console.log(res);
