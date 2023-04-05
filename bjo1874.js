let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const n = input.shift();
let answer = [];
let stack = [];
let stackNum = 1;

for (let i = 0; i < n; i++) {
  let num = input[i];
  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum++;
    answer.push("+");
  }
  let popStack = stack.pop();
  answer.push("-");
  if (popStack !== num) {
    answer = ["NO"];
    break;
  }
}

console.log(answer.join("\n"));
