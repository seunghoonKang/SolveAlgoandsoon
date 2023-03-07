let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString()


let findNumber = Number(input);
let result = 665;

for (let i = result; ; i++) {
  result++;
  if (String(i).includes("666")) {
    findNumber--;
  }
  if (findNumber === 0) {
    console.log(result - 1);
    break;
  }
}