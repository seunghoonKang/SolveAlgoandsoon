let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim();

const n = Number(input);
//3, 5 두개의 봉지만 있다.
//딱 떨어지지만 배달 봉지 최소의 수를 구하기
