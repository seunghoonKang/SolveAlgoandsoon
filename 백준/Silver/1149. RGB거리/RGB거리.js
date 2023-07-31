const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCase, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const numberArray = arr.map((i) => i.split(" ").map(Number));

for (let i = 1; i < testCase; i++) {
  numberArray[i][0] += Math.min(numberArray[i - 1][1], numberArray[i - 1][2]);
  numberArray[i][1] += Math.min(numberArray[i - 1][0], numberArray[i - 1][2]);
  numberArray[i][2] += Math.min(numberArray[i - 1][0], numberArray[i - 1][1]);
}

console.log(Math.min(...numberArray[testCase - 1]));
