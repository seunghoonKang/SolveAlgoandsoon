let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

//1번째 줄 5 21
//2번째 줄 5 6 7 8 9

let CardsandNum = input[0].split(' ') //5 21
let Cards = input[1].split(' ').map((elem)=>Number(elem)); //[5, 6, 7, 8, 9]
let max = 0;

let N = Number(CardsandNum[0]) // 5
let M = Number(CardsandNum[1]) // 21

for(let i=0; i<N; i++){ 
  for(let j = i+1; j<N; j++){ 
    for(let k = j+1; k<N; k++){ 
      let sum = Cards[i]+Cards[j]+Cards[k]; 
      //console.log(sum)
      if(sum > max && M >= sum ){ // 더한 값이 max보다 크고, M이 (21) 더한값보다 크거나 같다면
         max = sum; // max에 sum 을 할당한다.
      }
    }
  }
}
console.log(max);

//for 문이 돌아가는 방식을 보자면 (let sum 아래 console.을 찍어보면 알 수 있다.)
//1. sum은  5 + 6 + 7 = 18  ==>  sum(18) > max(0) && M(21) >= sum(18) 조건 성립 ==> max = 18
//2. sum은  5 + 6 + 8 = 19  ==>  sum(19) > max(18) && M(21) >= sum(19) 조건 성립 ==> max = 19
//3. sum은  5 + 6 + 9 = 20   동일.
//4. sum은  5 + 7 + 8 = 20   동일.
//5. sum은  5 + 7 + 9 = 21  
//7. sum은  6 + 7 + 9 = 22  ==> sum(22) > max(21) &&  M(21) >= sum(22) !!오류!!!  ==> max = 21
//8. sum은  6 + 8 + 9 = 23  
//9. sum은  7 + 8 + 9 = 24  