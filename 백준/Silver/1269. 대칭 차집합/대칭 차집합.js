const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let input = fs.readFileSync(path).toString().trim().split("\n");

Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

const setA = new Set(input[1].split(" "));
const setB = new Set(input[2].split(" "));

console.log(setA.difference(setB).size + setB.difference(setA).size);