let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//예제 입력
// 1 1  -> 1+1 =2
// 2 3 -> 2+3 = 5
// 3 4 
// 9 8
// 5 2

 //테스트 케이스가 없어 반복문을 어떻게 돌리지 생각하다 forEach 를 사용했다. 
input.forEach(element => {let result = element.split(' '); //각각 들어는 예제에 대해 split해 준 값을 result 변수에 할당해준다.
  console.log(Number(result[0]) + Number(result[1])) //숫자로 바꾸어 더한 후 console.log 해주면 딱딱 나온다
});
