let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//입력 예시
// 10 13            -- input[0]
// BBBBBBBBWBWBW    -- input[1]
// BBBBBBBBBWBWB    -- input[2]
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// WWWWWWWWWWBWB
// WWWWWWWWWWBWB


const ColumnSize = Number(input[0].split(' ')[0]); //행 
const RowSize = Number(input[0].split(' ')[1]); //열
const chess = [];
for(let i=1; i<=ColumnSize; i++){
  let row = input[i].split('')  //input[1]을 예로 들면 BBBBBBBBWBWBW 를'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B','W' 로 잘라줌
  chess.push(row); //그걸 미리 만들어놓은 배열 에 넣어둠
}


//모르겠당
