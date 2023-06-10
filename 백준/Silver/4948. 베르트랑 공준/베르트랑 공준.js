const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

function isPrimeNumber(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution() {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) return;
    for (let j = input[i]; j < input[i] * 2; j++) {
      isPrimeNumber(j + 1) ? (count += 1) : count;
    }
    console.log(count);
    count = 0;
  }
}
solution();