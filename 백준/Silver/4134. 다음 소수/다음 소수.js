const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let [N, ...arr] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

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
  for (let i = 0; i < N; i++) {
    let number = arr[i];
    while (!isPrimeNumber(number)) {
      number += 1;
    }
    console.log(number);
  }
}

solution();
