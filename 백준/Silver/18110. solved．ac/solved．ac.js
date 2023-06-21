const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [N, ...input] = fs.readFileSync(path).toString().trim().split("\n");

if (N === "0") {
  console.log(0);
} else {
  let sortNum = input.map(Number).sort((a, b) => a - b);

  const startIndex = Math.round(N * 0.15);
  const endIndex = N - startIndex;

  const slicedArray = sortNum.slice(startIndex, endIndex);

  let aver =
    slicedArray.reduce((prev, curr) => prev + curr) / slicedArray.length;

  console.log(Math.round(aver));
}
