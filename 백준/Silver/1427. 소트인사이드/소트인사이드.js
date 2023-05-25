let fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString();
const arr = [];

for (let i = 0; i < numbers.length; i++) {
  arr.push(numbers[i]);
}
console.log(arr.sort((a, b) => b - a).join(""));