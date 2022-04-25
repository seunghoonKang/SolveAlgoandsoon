let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
//아래 spread operator 쓰지 않고 테스트 케이스 날려버리는 스킬 .. slice를 써주면 된다 두둥


[testCaseNum, ...arr] = input; 
//이거 너무 신기.. testCaseNum만 따로 빼고 싶어서 구글링 하다 찾은 방법. spread Operator 활용하는 멋진 스킬

let NoduplicateArray = []; 
arr.forEach((elem)=>{
  if(!NoduplicateArray.includes(elem)) NoduplicateArray.push(elem);   
}) 
// arr를 forEach로 하나씩 꺼낼건데 includes 함수써서 중복 아니면 NoduplicateArray에 push 해줌


NoduplicateArray = NoduplicateArray.sort((x,y) => x.length - y.length || x.localeCompare(y))
// 그런 다음 정렬 그리고 || 뒤에 localeCompare는 사전처럼 순서에 맞게 정렬해준다함 ㅇㅇ;

NoduplicateArray.forEach((elem)=> console.log(elem));
// 마지막 하나씩 출력.. 

//사실 나도 어떻게 풀었는지 아직도 미스테리 .. 잘 사용도 못하면서 구글링에서 똑같이 따라적기만 해보았음 ..ㅠㅠ 

//단어정렬