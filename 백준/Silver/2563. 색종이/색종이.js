let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [totalBlackPaper, ...blackPapers] = input;
blackPapers = blackPapers.map((paper) => paper.split(" ").map(Number));

let whitePaper = Array.from(Array(100), () => Array(100).fill(false));
let count = 0;

for (let i = 0; i < totalBlackPaper; i++) {
  let x = blackPapers[i][0];
  let y = blackPapers[i][1];
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      whitePaper[j][k] = true;
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (whitePaper[i][j] === true) {
      count++;
    }
  }
}

console.log(count);