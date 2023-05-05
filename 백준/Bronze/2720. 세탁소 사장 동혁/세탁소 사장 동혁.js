let fs = require("fs");
let [testsNum, ...tests] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const coins = [25, 10, 5, 1];

for (let i = 0; i < testsNum; i++) {
  let change = tests[i];
  let coinCounts = [0, 0, 0, 0]; // quarter, dime, nickel, penny
  for (let j = 0; j < coins.length; j++) {
    if (change >= coins[j]) {
      coinCounts[j] = Math.floor(change / coins[j]);
      change -= coins[j] * coinCounts[j];
    }
  }
  console.log(coinCounts[0], coinCounts[1], coinCounts[2], coinCounts[3]);
}
