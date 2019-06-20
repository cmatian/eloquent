const countChars = (a, b) => {
    let count = 0;
    for(i = 0; i < a.length; i++) {
        if(a[i] === b) {
            count++;
        }
    }
    return count;
};

const countBs = (a) => {
    return countChars(a, 'B');
};

console.log(countBs("bumBleBees are very Big")); // 3
console.log(countChars("bBBBBBBb", 'b')); // 2
