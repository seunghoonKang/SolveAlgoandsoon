const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let [test, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX = 1000000;
const sieve = new Array(MAX + 1).fill(true);
sieve[0] = false;
sieve[1] = false;
for (let i = 2; i <= Math.floor(Math.sqrt(MAX)); i++) {
  if (sieve[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      sieve[j] = false;
    }
  }
}

const primes = sieve
  .map((bool, i) => (bool ? i : null))
  .filter((num) => num !== null);

for (let i = 0; i < test; i++) {
  const N = Number(input[i]);
  let count = 0;

  for (let j = 0; primes[j] <= N / 2; j++) {
    const diff = N - primes[j];
    if (sieve[diff]) {
      count += 1;
    }
  }

  console.log(count);
}
