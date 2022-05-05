let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//입력값 4 
//입력값 1 3 5 7

const primeNums = input[1].split(' ').map((elem)=>Number(elem)); // 1 3 5 7을 배열 내 숫자로 바꿔줌
//console.log(primeNums)

let answer = 0;
for(let i = 0; i<primeNums.length; i++){ //배열의 길이 4
  if(primeNums[i] === 1){ //1은 소수가 아니어서 
    continue; //지나갑니다
  }else{
    let count = 0;
    for(let j=2; j<=primeNums[i]; j++){ //2중 반복문에서, j=2 부터인거, j=1로 쓸거면 아래 적은 if count===1 을 2로 해주면 됨
      if(primeNums[i]%j === 0){ //반복문을 돌며 나머지가 0인 애들을 찾는데,
          count++; // 그 나머지가 0일 경우 count 값을 올려준다.
      }     
    }
    if(count === 1){ //근데 소수라면 당연 count 가 1만 되어 있겠지?
      answer++; //그러니 소수만 정답에 ++ 해주고
    }
  }
}
console.log(answer); //정답을 콘솔 찍어준다.

//사실 에라토스테네스의 체 라는 방법으로 풀어주고 싶었는데 이해력이 딸려서 안됐습니다 ^^^^