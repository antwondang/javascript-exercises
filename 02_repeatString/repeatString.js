const repeatString = (string, num) => {
    if (num < 0)
        return "ERROR";
    if (num === 1)
        return string;
    if (num === 0)
        return "";
    else 
        return string + repeatString(string, num - 1);
};

console.log(repeatString("hey", 0))

// Do not edit below this line
module.exports = repeatString;
