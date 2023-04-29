let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
let maxArr = [];

for (let i = 0; i < input.length; i++) {
  maxArr.push(Math.max(...input[i].split(" ").map(Number)));
  arr.push(input[i].split(" ").map(Number));
}

const maxNumber = Math.max(...maxArr);
const maxNumberRow = maxArr.findIndex((row) => row === maxNumber);
const maxNumberColumn = arr[maxNumberRow].findIndex(
  (column) => column === maxNumber
);

console.log(maxNumber);
console.log(maxNumberRow + 1, maxNumberColumn + 1);
