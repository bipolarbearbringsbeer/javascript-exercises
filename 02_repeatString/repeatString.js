const repeatString = function (text, num) {
    if (num < 0) {
        return 'ERROR';
    }
    else if (text === '' || num === 0) {
        return '';
    }
    else {
        return text.repeat(num);
    }
};

// Do not edit below this line
module.exports = repeatString;
