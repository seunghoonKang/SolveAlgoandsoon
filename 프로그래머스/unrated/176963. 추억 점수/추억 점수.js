function solution(name, yearning, photo) {
    let result = [];
    let sum = 0;
    for (const items of photo) {
        for(let i = 0; i < items.length; i++){
            if(name.includes(items[i])){
                let findIndex =name.indexOf(items[i])
                sum += yearning[findIndex]
            }
        }
        result.push(sum)
            sum = 0;
    }
    return result
}