let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let xArr = [];
let yArr = [];
input.forEach((item) => {
  let [x, y] = item.split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
});

let xCount = {};
let yCount = {};
xArr.forEach((x) => {
  xCount[x] = (xCount[x] || 0) + 1;
});
yArr.forEach((y) => {
  yCount[y] = (yCount[y] || 0) + 1;
});

let fourthX = Object.keys(xCount).find((x) => xCount[x] === 1);
let fourthY = Object.keys(yCount).find((y) => yCount[y] === 1);

console.log(`${fourthX} ${fourthY}`);