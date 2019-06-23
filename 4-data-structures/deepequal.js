// My Solution
const deepEqual = (obj1, obj2) => {
    flag = true;

    if(obj1 === obj2) {
        return true;
    }

    if (obj1 == null || typeof obj1 !== "object" ||
        obj2 == null || typeof obj2 !== "object") {
        return false;
    }

    Object.keys(obj1, obj2).forEach( key => {
        if(obj1[key].length !== obj2[key].length) {
            flag = false;
        }

        if(obj1[key] !== obj2[key]) {
            flag = false;
        }

        if(typeof obj1[key] === 'object' && typeof obj2[key] !== 'object') {
            flag = false;
        }

        if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            deepEqual(obj1[key], obj2[key]);
        }
    });

    if(flag === true) {
        return true;
    }
    return false;
};

// Book Solution:
function deepEqualBook(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof a !== "object" ||
        b == null || typeof b !== "object") {
        return false;
    }

    let keysA = Object.keys(a),
        keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqualBook(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log('\n');
console.log(deepEqualBook(obj, obj));
// → true
console.log(deepEqualBook(obj, {here: 1, object: 2}));
// → false
console.log(deepEqualBook(obj, {here: {is: "an"}, object: 2}));
// → true