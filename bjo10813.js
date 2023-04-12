let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [NM, ...arr] = input;
const [N, M] = NM.split(" ").map(Number);

const res = Array.from({ length: N }, (_, i) => i + 1);
// 1 2
// 3 4
// 1 4
// 2 2
for (let k = 0; k < M; k++) {
  const [i, j] = arr[k].split(" ").map(Number);
  [res[i - 1], res[j - 1]] = [res[j - 1], res[i - 1]];
}
console.log(res.join(" "));
