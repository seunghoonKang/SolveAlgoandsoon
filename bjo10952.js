let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//예제 입력
// 1 1  -> 1+1 =2
// 2 3 -> 2+3 = 5
// 3 4 
// 9 8
// 5 2
// 0 0


input.forEach(element => {let result = element.split(' '); 
  if(Number(result[0]) + Number(result[1]) == 0){
    null; //0 0이 들어오면 그냥 null을 줘버림 
  }
  else{
  console.log(Number(result[0]) + Number(result[1])) }
});
