let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((elem)=>elem.split(' '));

// 입력 예시
// 6 8 10
// 25 52 60
// 5 12 13
// 0 0 0


for (let N of input){
  console.log(N) // ['6', '8', '10] ['25', '52', '60'] ['5', '12', '13] ['0', '0', '0'] 으로 들어옴
  let nums = N.sort((a, b) => a-b)
  console.log(nums) // 위에 이미 정렬 되어 들어왔지만 예를들어 10 ,8, 6이 들어왔다면 이때 ['6', '8', '10'] 으로 정렬됨
  let num1 = Number(nums.shift()) //하나씩 뽑아내며 숫자로 바꿔줌
  let num2 = Number(nums.shift())
  let num3 = Number(nums.shift())

  if(num1 === 0){
    break; // 0 0 0 들어오면 끝인데, 어차피 0하나만 봐도 돼서 num1만 적음
  }
  else if(num1*num1 + num2*num2 === num3*num3){ //빗변을 제외한 두 변의 길이의 제곱은 빗변의 제곱과 같다.
    console.log('right')
  }else{
    console.log('wrong');
  }
}



