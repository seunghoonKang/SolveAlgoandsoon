let fs = require("fs");
let [N, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

if (N === "1") return console.log(0);

let xArray = [];
let yArray = [];
for (let i = 0; i < N; i++) {
  let [x, y] = arr[i].split(" ").map(Number);
  xArray.push(x);
  yArray.push(y);
}
console.log(
  (Math.max(...xArray) - Math.min(...xArray)) *
    (Math.max(...yArray) - Math.min(...yArray))
);
