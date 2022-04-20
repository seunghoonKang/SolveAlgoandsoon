let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


// 2 
// 3 ABC
// 5 /HTP

const arr = [];
const count = Number(input[0]); //2
let result = ''
for(let i=1; i<=count; i++) {
  printCount = Number(input[i].split(' ')[0]); //첫번째 돌 때 3 , 두번째 돌 때 5
  str = input[i].split(' ')[1]; //첫번째 돌 때 ABC, 두번째 돌 때 /HTP

  for(let j=0; j < str.length; j++) {
    result += str[j].repeat(printCount); // ABC의 0번째 A를 3번 반복, 1번째 B를 3번 반복 .... 값을 result에 보관
  }
  result += '\n'; //행 나누기
}

console.log(result); //출력
