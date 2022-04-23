let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let sing = input.join()

  if(sing =='1,2,3,4,5,6,7,8'){
    console.log('ascending');
  }
  else if (sing == '8,7,6,5,4,3,2,1'){
    console.log('descending');
  }
  else {
    console.log('mixed');
  }
