let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let result = [];

for (let i = 1; i < input.length; i++) {
  let count = [];
  let check = input[i].split('');
  for (let elem of check) {
    if(elem ==='('){
      count.push(elem)
    }
    else{
      if(count[count.length-1]==='('){ //이 부분이 핵심이다. 문제 상 ()이렇게 정상적인 괄호는 빼주는 것인데,
        count.pop() //0번째에 '(' , 1번째에 ')'이 들어왔을 때, count[count.length-1] 은 count[0] ==> '('이모양이라면 빼주는 것 
      }
      else{
        count.push(')');
      }
    }
  }
  result.push(count[0] ? 'NO' : 'YES'); //이거 이해안되는 코드.. 해석좀..
  //count.length !== 0 ? console.log('No') : console.log('YES'); 이게 왜 안되는지 의문
}
console.log(result.join('\n'));