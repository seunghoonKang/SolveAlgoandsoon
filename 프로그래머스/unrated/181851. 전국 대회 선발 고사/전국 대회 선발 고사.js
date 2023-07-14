function solution(rank, attendance) {
   let arr = [];
   for(let i = 1; i <= rank.length; i++){
       if(attendance[rank.indexOf(i)] === true){
           arr.push(rank.indexOf(i))
       }
   }
    return 10000*arr[0] + 100*arr[1] + arr[2]
}