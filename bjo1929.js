let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [M, N] = input;

function getPrimes(M, N) {
  const numsArr = Array.from({ length: N + 1 }, () => true);
  numsArr[0] = numsArr[1] = false;
  const primeNumbers = [];

  for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
    if (numsArr[i]) {
      for (let j = i + i; j <= N; j += i) {
        numsArr[j] = false;
      }
    }
  }
  for (let i = M; i <= N; i++) {
    if (numsArr[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers.join("\n");
}

console.log(getPrimes(M, N));
