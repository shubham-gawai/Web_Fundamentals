// find the factorial of any number, if num is 0 then return 1

function findFact(num){

    if(num === 0){
        num =1;
    }

    else {
        for(var i=num; i>1; i--){
            num = (i-1) * num;
        }
    }

    return num ;
       
}

console.log(findFact(7));