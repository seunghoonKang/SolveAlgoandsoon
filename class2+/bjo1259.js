let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//펠린드롬 보니까 어떻게 푸는지는 기억안났는데 엘리스에서 풀었던 게 기억나서 냉큼 풀어버림ㅎ;

function findPalindrome(str){
    if(str == 0){null} 
    else{(str == str.split('').reverse().join('')) ? console.log('yes') : console.log('no');
}} 
// 굳이 펑숀 안써도 되는데 썼읍니다. 마지막에 0 들어오는건 무시해줘야 되서 null을 줬구여.
// else 는 엘리스 고대로 차용했습니다 ^^,,

for(let i=0; i<input.length; i++){
  findPalindrome(input[i])
}

// 그 다음 들어오는 input 값으로 for문으로 반복하여 처리해버렸습니다 끝!