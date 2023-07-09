function solution(code) {
    let mode = false;
    let result = '';
    
    for(let i = 0; i < code.length; i++){
        if(code[i] === '1'){
            mode = !mode    
       }else if(mode === false && i % 2 === 0){
           result += code[i]
       }else if(mode === true && i % 2 !== 0){
           result += code[i]
       }
    }
   return result === '' ? 'EMPTY' : result
}