const repeatString = function( string, num) {
    let placeHolder ='';
    let error = 'ERROR';
    if (num < 0) {
        return error;
        }else{
        for (let i = 0; i < num; i++) {
        
           placeHolder += string;
        }
        return placeHolder.toString();
    }
};

// Do not edit below this line
module.exports = repeatString;

//npm test repeatString.spec.js