function solution(n, control) {
   const controlKeys = [...control]
   const operation = {
       'w' : +1,
       's' : -1,
       'd': +10,
       'a' : -10
   }
   for(const controlKey of controlKeys){
        if(Object.hasOwn(operation,controlKey)){
           n += operation[controlKey]
       }
   }
    return n
}