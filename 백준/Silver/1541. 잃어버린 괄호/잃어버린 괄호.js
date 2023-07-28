const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

const plus = input.split("-").map(
  (value) =>
    value
      .split("+")
      .map(Number)
      .reduce((prev, curr) => prev + curr),
  0
);

const minValue = plus.reduce((prev, curr) => (prev -= curr));

console.log(minValue);
