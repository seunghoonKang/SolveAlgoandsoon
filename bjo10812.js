let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const [NM, ...rest] = input;
// const [N, M] = NM.split(" ");

// const res = Array.from({ length: N }, (_, i) => i + 1);

// for (let num = 0; num < M; num++) {
//   const [i, j, k] = rest[num].split(" ");
//   console.log(i, j, k);
// }

let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);

let list = Array.from({ length: N }, (_, i) => i + 1);

for (let a = 1; a <= M; a++) {
  const [i, j, k] = input[a].split(" ");
  let start = list[i - 1];
  let end = list[k - 1];

  while (start !== end) {
    list.splice(i - 1, 1);
    list.splice(j - 1, 0, start);
    start = list[i - 1];
  }
}

console.log(list.join(" "));
