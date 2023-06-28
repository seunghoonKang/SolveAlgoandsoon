function solution(X, Y) {
    let ans = '';
    let xArr = new Array(10).fill(0);
    let yArr = new Array(10).fill(0);
    
    X.split('').forEach((item) => xArr[item]++);
    Y.split('').forEach((item) => yArr[item]++);
    
    xArr.forEach((x,index) => {
        if(x !== 0 && yArr[index] !== 0){
            ans += String(index).repeat(Math.min(xArr[index],yArr[index]))
        }
    })
    if(ans.length > 0 && +ans === 0) return "0"
    if(ans.length === 0) {
        return "-1"
    }else{
         return [...ans].reverse().join('')
    }
}