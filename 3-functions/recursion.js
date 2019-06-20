const isEven = (a) => {
    a = Math.abs(a);
    if(a === 0) {
        return true
    }

    if(a === 1) {
        return false
    }

    return isEven(a - 2);
};

console.log(isEven(50)); // True
console.log(isEven(75)); // False
console.log(isEven(-75)); // False
console.log(isEven(-50)); // True