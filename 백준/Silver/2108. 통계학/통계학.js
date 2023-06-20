const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [N, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function arithmeticMean(arr) {
  let a = arr.reduce((prev, curr) => prev + curr);
  let b = Math.round(a / N);
  b === -0 ? console.log(0) : console.log(b);
}

function median(arr) {
  let sort = arr.sort((a, b) => a - b);
  let loc = Math.floor(sort.length / 2);
  console.log(sort[loc]);
}

function mode(arr) {
  let map = new Map();
  arr.forEach((item) =>
    !map.has(item) ? map.set(item, 1) : map.set(item, map.get(item) + 1)
  );

  let maxValue = 0;
  let array = [];
  map.forEach((item, key) => {
    if (maxValue < item) {
      maxValue = item;
      array = [];
      array.push(key);
    } else if (maxValue === map.get(key)) {
      array.push(key);
    }
  });
  array.length !== 1 ? console.log(array[1]) : console.log(array[0]);
}

function range(arr) {
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  console.log(maxNum - minNum);
}

arithmeticMean(input);
median(input);
mode(input);
range(input);
