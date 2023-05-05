let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()

  let result = 3
  let rule =1
  for(let i = 2; i <= input; i++){
    rule *= 2 
    result += rule
  }
  console.log(result * result)