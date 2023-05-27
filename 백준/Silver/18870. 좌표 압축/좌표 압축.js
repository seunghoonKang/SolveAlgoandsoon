let fs = require("fs");
let [, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numberArr = arr[0].split(" ").map(Number);
let result = "";
let keyValueObj = {};

let setArr = new Set(numberArr);
let sortedArr = [...setArr].sort((a, b) => a - b);

sortedArr.forEach((item, i) => (keyValueObj[item] = i));

for (let i = 0; i < numberArr.length; i++) {
  result += keyValueObj[numberArr[i]] + " ";
}
console.log(result);
