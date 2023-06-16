const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let [N, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let person = [];

input.forEach((v) => person.push(v.split(" ")));

function solution() {
  let res = [];
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (
        Number(person[i][0]) < Number(person[j][0]) &&
        Number(person[i][1]) < Number(person[j][1])
      ) {
        count++;
      }
    }
    res.push(count + 1);
  }
  console.log(res.join(" "));
}

solution();
