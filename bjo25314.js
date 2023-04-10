let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString();

let output = "";

function solution(num) {
  for (let i = 0; i < num / 4; i++) {
    output += "long ";
  }
  output += "int";
  console.log(output);
}

solution(Number(input));
