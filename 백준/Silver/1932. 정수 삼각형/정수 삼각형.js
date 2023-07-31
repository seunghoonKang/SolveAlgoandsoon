const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCase, ...arr] = fs.readFileSync(path).toString().trim().split(`\n`);

const numberArray = arr.map((i) => i.split(" ").map(Number));

for (let i = 1; i < testCase; i++) {
  for (let j = 0; j < numberArray[i].length; j++) {
    if (!numberArray[i - 1][j - 1]) {
      numberArray[i][j] += numberArray[i - 1][0];
    } else if (!numberArray[i - 1][j]) {
      numberArray[i][numberArray[i].length - 1] +=
        numberArray[i - 1][numberArray[i - 1].length - 1];
    } else {
      numberArray[i][j] += Math.max(
        numberArray[i - 1][j - 1],
        numberArray[i - 1][j]
      );
    }
  }
}

console.log(Math.max(...numberArray[testCase - 1]));
