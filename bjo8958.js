let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//입력 예시
// 5               - input[0]
// OOXXOXXOOO      - input[1]
// OOXXOOXXOO      - input[2]
// OXOXOXOXOXOXOX  - input[3]
// OOOOOOOOOO      - input[4]
// OOOOXOOOOXOOOOX - input[5]


for (let i = 1; i <= input[0]; i++) //input[0], i는 1~5까지 반복
{ 
  let score = 0; //점수 변수 생성
  let total = 0; //합계 변수 생성
  for (let j = 0; j < input[i].length; j++) //이중 반복문 사용, j는 0부터 input[i]의 길이까지, i는 1부터 시작하니 input[1]은 10번 반복
  {
    if (input[i][j] === 'O') { //input[i][j] = input[1][0], input[1][1], input[1][2] ....에서 'O'가 나왔다?
      score = score+1; //그럼 점수에 +1을 해주고
    } else {
      score = 0; //O가 나온거 아니면 그냥 0점으로 해줘
    }
    total = total + score; //한 번 돌고나서는 스코어를 토탈에 더해줘 계속
  }
  
  console.log(total); //마지막으로 그 값을 출력해줘
}