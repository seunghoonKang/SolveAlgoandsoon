//let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));


let nums = input;
let index = '';
let MaxNum = '';

for(let i=0; i<9; i++){
  if(nums[i]>MaxNum){
    MaxNum = nums[i];
    index = i;
  }
} 
console.log(MaxNum);
console.log(index+1);