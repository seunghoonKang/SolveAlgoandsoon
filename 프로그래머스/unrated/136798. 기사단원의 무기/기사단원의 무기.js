function solution(number, limit, power) {
    let arr = [];
    for(let i = 1; i <= number; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0) {
                if (i/j === j) { 
                    count++;
                } else { 
                    count += 2;
                }
             }
        }
        arr.push(count)
        count = 1
    }
console.log(arr)
    let res =arr.reduce((prev, curr) => curr >limit ? prev + power : prev + curr)
                        
    return res
}