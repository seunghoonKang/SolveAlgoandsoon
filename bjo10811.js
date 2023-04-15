let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [NM, ...arr] = input;

// 5,4
const [N, M] = NM.split(" ").map(Number);

// 1, 2, 3, 4, 5
const res = Array.from({ length: N }, (_, i) => i + 1);

// 1 2
// 3 4
// 1 4
// 2 2

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let temp = [];
  for (let j = a - 1; j < b; j++) {
    temp.push(res[j]);
  }
  temp.reverse();
  res.splice(a - 1, b - a + 1, ...temp);
}
console.log(res.join(" "));
