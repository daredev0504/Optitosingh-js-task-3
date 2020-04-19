 function divisibleBy(num){
       let result=[];
       
        for(let a=1; a<=num; a++){
        let arr=[];
        if (a%2==0) {
            arr.push('yu')
            }
        if(a%3==0){
            arr.push('gi');
        }
        
       if(a%5==0){
        arr.push('oh');
       } 
       if(a%2!==0 && a%3!==0 && a%5!==0){
        arr.push(a)
       } 
       
       newArr=arr.length>1?arr.join('-'):arr[0];
        result.push(newArr);
        }
          return result;
       }
        
    console.log( divisibleBy(100));
    console.log( divisibleBy(50));
    
