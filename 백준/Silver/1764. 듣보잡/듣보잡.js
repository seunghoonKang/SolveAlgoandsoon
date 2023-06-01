const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [NM, ...arr] = fs.readFileSync(path).toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);

const notHeard = new Set(arr.slice(0, N));
const notSeen = new Set(arr.slice(N));
const result = [];
notSeen.forEach((v) => {
  if (notHeard.has(v)) {
    result.push(v);
  }
});
console.log(result.length);
console.log(result.sort().join("\n"));
