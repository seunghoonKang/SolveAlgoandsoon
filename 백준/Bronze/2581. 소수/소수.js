let fs = require("fs");
let [M, N] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function findPrimesInRange(m, n) {
  let sum = 0;
  let min = -1;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
      if (min === -1 || i < min) {
        min = i;
      }
    }
  }
  if (sum === 0) {
    console.log(-1);
  } else {
    console.log(sum);
    console.log(min);
  }
}

findPrimesInRange(M, N);
