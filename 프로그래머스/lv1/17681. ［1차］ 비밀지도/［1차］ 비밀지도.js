function solution(n, arr1, arr2) {
    let arr = new Array(n).fill(' ')
    let res = [];
    for(let i = 0; i < n; i++){
        let splitedArr1 = arr1[i].toString(2).padStart(n,'0').split('');
        let splitedArr2 = arr2[i].toString(2).padStart(n,'0').split('');;
        
         splitedArr1.forEach((item,idx) => {
             item === '1' ? arr[idx] = '#' : ''
         })
        splitedArr2.forEach((item,idx) => {
             item === '1' ? arr[idx] = '#' : ''
         })
        res.push(arr.join(''))
        arr = new Array(n).fill(' ')
    }
    return res
}