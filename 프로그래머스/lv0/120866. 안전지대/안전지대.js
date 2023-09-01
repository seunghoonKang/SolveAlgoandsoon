function checkDangerSpot(board, arr){
    for(let i = 0; i < board.length; i++){
       for(let j = 0; j < board.length; j++){
           if(board[i][j] === 1){
                arr[i][j] = 1
                arr[i][j+1] = 1
                arr[i][j+2] = 1
                arr[i+1][j] = 1
                arr[i+1][j+1] = 1
                arr[i+1][j+2] = 1
                arr[i+2][j] = 1
                arr[i+2][j+1] = 1
                arr[i+2][j+2] = 1
           }    
       }
   }
    return arr
}

function countDangerSpot(dangerZone){
    let count = 0;
    for(let k = 1; k < dangerZone.length -1; k++){
        for(let l = 1; l < dangerZone.length -1; l++){
            if(dangerZone[k][l] === 1){
                count += 1;
            }
        }
    }
    return count
}

function solution(board) {
   const arr = Array.from(({length: board.length + 2}), () => new Array(board.length + 2).fill(0))
   let count = 0;
   
   const dangerZone = checkDangerSpot(board, arr) 
   const countDanger = countDangerSpot(dangerZone) 
   

    const result = (board.length**2) - countDanger
    return result
}