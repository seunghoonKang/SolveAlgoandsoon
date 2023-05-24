let fs = require("fs");
const [person, scores] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, k] = person.split(" ");

console.log(
  scores
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)[k - 1]
);