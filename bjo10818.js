let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[1].split(' '); //나는 split까지만 했는데 
//let numbers = input[1].split(' ').map(x=> Number(x)); 블로그에서 찾아본 number 다르게 구하는 법 1.

console.log(Math.min(...num), Math.max(...num)); //spread operator를 쓰면 하나씩 꺼내는 값을 알아서 숫자로 보나?_? 오류없이 잘 나왔네..