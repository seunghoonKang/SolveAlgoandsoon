let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [NM, ...rest] = input;
const [N, M] = NM.split(" ");

const A = [];
const B = [];
let res = [];
const result = [];

for (let i = 0; i < N; i++) {
  A.push(rest[i].split(" "));
}

for (let i = N; i < rest.length; i++) {
  B.push(rest[i].split(" "));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    res.push(Number(A[i][j]) + Number(B[i][j]));
  }

  result.push(res);
  res = [];
}
for (let i = 0; i < N; i++) {
  console.log(result[i].join(" "));
}
