let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const n = input[0];  //5
// const m = input[2];  //5

const arr1 = input[1].split(' ').map((elem)=>Number(elem)); // 4 1 5 2 3 
const arr2 = input[3].split(' ').map((elem)=>Number(elem)); // 1 3 7 9 5

arr1.sort((a,b)=>a-b); //4 1 5 2 3 들어온거 정렬 --> 1 2 3 4 5 

//사실 위에 sort 함수만 붙여도 정렬이 됐는데 계속 실패뜸 ㅡㅡ 왜인지는 모름

let answer =[]; // 정답 받을 배열 생성

arr2.forEach((elem)=>{
  let start = 0; // 시작은 0부터
  let end = arr1.length -1; // arr1의 길이 -1, arr1안에 arr2 각각의 값들이 있는지 보는거니까
  let res = false;

  while(start <= end){
    let mid = Math.floor(Number((start + end )/2)); //중간값 찾기, 딱 떨어지지 않으면 안되니 floor 추가
    if(elem < arr1[mid]){
      end = mid -1; //업다운 게임같이 하면 된다. 1~100중 내가 부른 중간값이 50인데, 찾는수가 50 아래라면, end인 끝 값을 50 -1 인 49의 범위로 다시 한정 지어 구하는 것이다.
    }
    else if(elem >arr1[mid]){
      start = mid +1;
    }
    else {
      res = true;
      break;
    }
  }
  if (res){
    answer.push(1);  //그 값이 있다면, 1을 내뱉고
  }else{
    answer.push(0); // 없으면 0을 뱉으렴
  }
})
console.log(answer.join('\n')); //그리고 하나씩 튀어나오는 0과 1을 쪼인 해주고 하나씩 나오게함
