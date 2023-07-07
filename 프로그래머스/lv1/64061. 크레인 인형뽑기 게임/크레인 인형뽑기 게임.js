function solution(board, moves) {
  let arr = [];
  let res = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    if (arr.length > 1) {
      if (arr[arr.length - 2] === arr[arr.length - 1]) {
        res += 2;
        arr.splice(arr.length - 2, 2);
      }
    }
  }
  return res;
}
