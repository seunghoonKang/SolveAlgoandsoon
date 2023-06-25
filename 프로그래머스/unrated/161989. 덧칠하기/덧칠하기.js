function solution(n, m, section) {
    let count = 0;
   for(let i = 1; i <= n; i++){
       if(i === section[0]){
           section.shift()
           for(let j = i + 1; j < i+m; j++){
               if(j === section[0]){
                   section.shift()
               }
           }
       count++    
       }
       
   }
    return count
}