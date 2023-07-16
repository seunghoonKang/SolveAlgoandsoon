const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [N, A, B] = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;

function solution(firstLine, secondLine) {
  const sortedA = firstLine
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const sortedB = secondLine
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  sortedA.map((item, index) => {
    return (answer += item * sortedB[index]);
  });
}
solution(A, B);

console.log(answer);
