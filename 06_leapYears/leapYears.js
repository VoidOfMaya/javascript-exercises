// leap years:
// devisable by 4
// not devisable by 100 unless its by 400
//
//
//
//
//
//

const leapYears = function(year) {
    if(year % 4 === 0 && (year % 100  !== 0 || year % 400 === 0) ){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;

//npm test leapYears.spec.js
