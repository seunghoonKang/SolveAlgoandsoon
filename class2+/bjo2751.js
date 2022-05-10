let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

[testCaseNum, ...arr] = input; 
let res = [...arr];

res.filter((val, idx)=>{
  return res.indexOf(val) === idx;
})
res.sort((a,b)=>a-b);
res.map(elem => Number(elem))

console.log(res.join('\n'))
// arr.forEach(element => {
//   if(!result.includes(element)){
//     result.push(element)
//   }
// })

// console.log(result.join("\n"));
// ;
