let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(str) {
  let res = "";
  for (let i = input.length - 1; i >= 0; i--) {
    res += str[i];
  }
  str === res ? console.log(1) : console.log(0);
}

solution(input);