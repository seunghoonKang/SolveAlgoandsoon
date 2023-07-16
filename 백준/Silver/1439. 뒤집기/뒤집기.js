const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

function solution(number) {
  let zero = 0;
  let one = 0;
  number.split("0").filter((i) => (i !== "" ? zero++ : ""));
  number.split("1").filter((i) => (i !== "" ? one++ : ""));
  console.log(Math.min(zero, one));
}

solution(input);