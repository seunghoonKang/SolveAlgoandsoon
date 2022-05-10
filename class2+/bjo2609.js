let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //24 18

let numA = Number(input[0]) //24
let numB = Number(input[1]) //18
let s = ''; 

while(numA % numB !== 0){ // numA(예시 24) 나누기 numB(18)의 나머지가 0이 아닐때면 계속 돌거야.
  s= numA % numB; //나머지를 s에 줄거야 24/18의 나머지니까 6
  if(s !== 0){ //그 s(6) 가 0이 아니면
    numA = numB // numA 18로 
    numB = s; //numB 는 6으로. 그리고 반복.
  }
}
console.log(numB);
console.log((Number(input[0])*Number(input[1]))/numB)
//1. 24 / 18 , 나머지 6  
//2. 18/ 6, 나머지 0
//3. 최소공배수는 두 값에서 최대공약수를 나눠주면 됨

