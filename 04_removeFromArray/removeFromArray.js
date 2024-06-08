const removeFromArray = function (arr, ...theArgs) {
    //creating new array without elements in theArgs array
    let result = arr.filter(number => !theArgs.includes(number));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
