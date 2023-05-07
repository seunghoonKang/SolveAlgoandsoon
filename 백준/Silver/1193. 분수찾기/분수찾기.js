let fs = require("fs");
let X = fs.readFileSync("/dev/stdin").toString();

let xGroup = 0;
let start = 0;
let locationOfX = 0;
let 분모 = 0;
let 분자 = 0;
let res = [];

function findXGroup(X){
  for (let i = 1; i <= X; i++) {
    xGroup += i;
    if (xGroup >= X) {
      return (xGroup = i + 1);
    }
  }
}
findXGroup(X)

function findStartNum(){
  for (let i = xGroup - 2; i > 0; i--) {
    start += i;
  }
  start += 1
}

findStartNum()

locationOfX = X - start;

function findResult(){
  for (let i = 1; i < xGroup; i++) {
    if (xGroup % 2 === 1) {
      분모 = xGroup - i;
      분자 = i;
      res.push(`${분자}/${분모}`);
    } else if(xGroup % 2 === 0){
        분자 = xGroup - i;
        분모 = i;
        res.push(`${분자}/${분모}`);
    }
  }
} 

findResult()

console.log(res[locationOfX])

