const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split(`\n`);

const [N, M] = input[0].split(" ");
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = trees[trees.length - 1];
let res = 0;

while (start <= end) {
  let sum = 0;
  let mid = Math.floor((start + end) / 2);
  trees.forEach((tree) => {
    if (tree - mid > 0) {
      sum += tree - mid;
    }
  });
  if (sum >= M) {
    if (mid > res) res = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(res);
