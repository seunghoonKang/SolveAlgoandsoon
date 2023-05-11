let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let res = [];
for (let i = 0; i < input.length - 1; i++) {
  for (let j = 1; j < input[i]; j++) {
    if (input[i] % j === 0) res.push(j);
  }
  let result = res.reduce((acc, curr) => acc + curr);

  if (result === input[i]) {
    console.log(result, "=", res.join(" + "));
  } else {
    console.log(input[i], "is NOT perfect.");
  }
  res = [];
}
