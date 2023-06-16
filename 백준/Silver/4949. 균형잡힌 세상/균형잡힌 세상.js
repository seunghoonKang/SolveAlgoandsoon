const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let input = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") break;
  let arr = [];
  let isSame = true;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(" || input[i][j] === "[") {
      arr.push(input[i][j]);
    } else if (input[i][j] === ")") {
      if (arr[arr.length - 1] === "(") {
        arr.pop();
      } else {
        isSame = false;
        break;
      }
    } else if (input[i][j] === "]") {
      if (arr[arr.length - 1] === "[") {
        arr.pop();
      } else {
        isSame = false;
        break;
      }
    }
  }
  if (arr.length > 0 || !isSame) console.log("no");
  else console.log("yes");
}
