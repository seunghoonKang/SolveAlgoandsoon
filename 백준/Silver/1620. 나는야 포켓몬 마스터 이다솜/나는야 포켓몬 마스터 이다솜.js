const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [NM, ...arr] = fs.readFileSync(path).toString().trim().split("\n");

let poketmon = new Map();
let [N, M] = NM.split(" ").map(Number);
let question = arr.slice(N);

for (let i = 0; i < N; i++) {
  poketmon.set(arr[i], i + 1);
}

question.forEach((qu) => {
  if (Number.isNaN(+qu)) console.log(poketmon.get(qu));
  else console.log(arr[+qu - 1]);
});