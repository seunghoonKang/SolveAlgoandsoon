let fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin"));

function solution(N) {
  for (let i = 1; i < N; i++) {
    let blank = " ".repeat(N - i);
    let stars = "*".repeat(i + (i - 1));
    console.log(blank + stars);
  }

  for (let j = N; j > 0; j--) {
    let blank = " ".repeat(N - j);
    let stars = "*".repeat(j + (j - 1));
    console.log(blank + stars);
  }
}

solution(N);
