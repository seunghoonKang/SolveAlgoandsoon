let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [caseNum, ...arr] = input;
let first = "";
let last = "";
const res = [];

for (let i = 0; i < caseNum; i++) {
  if (arr[i].length === 1) {
    res.push(arr[i] + arr[i]);
  } else {
    first = arr[i].split("")[0];
    last = arr[i].slice(-1);

    res.push(first + last);
  }
}
console.log(res.join('\n'));
