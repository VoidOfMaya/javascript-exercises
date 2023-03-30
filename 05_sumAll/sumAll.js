const sumAll = function( x , y) {
//sums all numbers within range of x and y parameters
// works with large numbers
//works with larger numbers first (smaller number goes first)
//returns Error if numbers are smaller then 0
//only numbers  allowed otherwise throw ERROR
    let sumFinal = 0;
    if(x > 0 && y > 0 && typeof x =='number' && typeof y == 'number'){
        if(x < y){
            for (let i =x; i <= y ; i++){
                sumFinal += i;
            }
            return sumFinal;    
        }else{
            for(let i =y ; i <= x ; i++){
                sumFinal += i;
            }
            return sumFinal;
        }  
    }else{return 'ERROR';}
};

// Do not edit below this line
module.exports = sumAll;

//npm test sumAll.spec.js