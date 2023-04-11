let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [NM, ...arr] = input;
const [N, M] = NM.split(" ").map(Number);
const newArr = new Array(1 * N).fill(0);

for (let i = 0; i < M; i++) {
  const [a, b, ball] = arr[i].split(" ").map(Number);
  for (let x = a; x <= b; x++) {
    newArr[x - 1] = ball;
  }
}
console.log(newArr.join(" "));
