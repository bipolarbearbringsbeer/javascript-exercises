const sumAll = function (...args) {
    if (typeof args[0] !== 'number' ||
        typeof args[1] !== 'number' ||
        args[0] < 0 ||
        args[1] < 0) {
        return 'ERROR';
    }

    let arrayOfArguments = args.sort(compareNumbers);
    let startNum = arrayOfArguments[0];
    let finishNum = arrayOfArguments[1];
    let sum = 0;

    for (let i = startNum; i <= finishNum; i++) {
        sum += i;
    }

    return sum;
};

function compareNumbers(a, b) {
    return a - b;
}

// Do not edit below this line
module.exports = sumAll;
