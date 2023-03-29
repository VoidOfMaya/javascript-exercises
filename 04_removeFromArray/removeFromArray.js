const removeFromArray = function(array) {
    const args =Array.from(arguments).slice(1);
    return array.filter(element => !args.includes(element));


};


// Do not edit below this line
module.exports = removeFromArray;

// npm test removeFromArray.spec.js