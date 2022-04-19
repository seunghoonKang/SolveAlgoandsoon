let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

countingStar = Number(input);
stars = '';
for (let i=0; i< countingStar; i++){
  console.log(stars += '*');
}