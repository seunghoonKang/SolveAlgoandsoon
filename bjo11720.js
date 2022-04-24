let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let total = 0;
for(let i=0; i<input[1].length; i++){
  total = total + Number(input[1][i])
}console.log(total);

//다른 방식으로 풀어보고 싶은데 생각이 안나네