let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim();

let n = Number(input);
//3, 5 두개의 봉지만 있다.
//딱 떨어지지만 배달 봉지 최소의 수를 구하기
let count = 0;

while (true) {
  if (n % 5 === 0) {
    console.log(n / 5 + count);
    break;
  } else if (n <= 0) {
    console.log(-1);
    break;
  }
  n -= 3;
  count++;
}
