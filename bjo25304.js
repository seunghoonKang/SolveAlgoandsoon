let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [amount, _, ...items] = input;
let res = 0;

(function solution() {
  items
    .map((i) => i.split(" "))
    .map((i) => (res += Number(i[0]) * Number(i[1])));
  return res === Number(amount) ? console.log("Yes") : console.log("No");
})();
