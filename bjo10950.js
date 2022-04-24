let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//예제 입력
// 5  -> 테스트 케이스 개수
// 1 1  -> 1+1 =2
// 2 3 -> 2+3 = 5
// 3 4 
// 9 8
// 5 2

for(let i=1; i<=input[0]; i++){ //for문으로 테스트케이스 개수
  console.log(input[i].split(' ').reduce((x,y)=>Number(x)+Number(y))) //input[1]번째 1 1을 split으로 잘라준다. 그럼 [1], [1]인데 이걸 reduce 함수 사용 후, 둘다 문자열이라 숫자로 바꿔주고 더하면 끝!
}
