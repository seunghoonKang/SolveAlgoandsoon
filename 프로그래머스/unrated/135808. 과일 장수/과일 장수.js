function solution(k, m, score) {
   if(score.length < m) return 0;
    
   let res = 0;
   let sortedScore = score.sort((a,b) => b - a)

    for(let i = m-1; i < sortedScore.length; i += m){
        res += sortedScore[i] * m;
    }
   return res
}