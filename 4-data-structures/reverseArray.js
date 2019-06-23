const reverseArray = (array) => {
    let newArray = [];
    for(i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

const reverseArrayInPlace = (array) => {
    lastIndex = array.length - 1;
    for(i = 0; i <= Math.floor(array.length / 2); i++) {
        temp = array[i];
        array[i] = array[lastIndex];
        array[lastIndex] = temp;
        lastIndex--;
    }
    return array;
};

console.log(reverseArrayInPlace([1, 2, 3]));