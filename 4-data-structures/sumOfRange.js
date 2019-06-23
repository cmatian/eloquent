const range = (start, end, step = (start < end ? 1 : -1)) => {
    results = [];

    if (step >= 0) {
        for(i = start; i <= end; i += step) {
            results.push(i);
        }
    } else {
        for(i = start; i >= end; i += step) {
            results.push(i);
        }
    }

    return [...results];
};

console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2)); // 1, 3, 5, 7, 9
console.log(range(10, 1, -1));


const sum = (array) => {
    count = 0;
    for(i = 0; i < array.length; i++) {
        count += array[i];
    }
    return count;
};

