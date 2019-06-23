array = [1, 2, 3];

const arrayToList = (array) => {
    list = null;
    for(i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
};

const listToArray = (list) => {
    array = [];
    for(node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
};

const prepend = (el, list) => {
    return {
        value: el,
        rest: list
    }
};

const nth = (list, idx) => {
    return listToArray(list)[idx] || undefined;
};

const nthRecursion = (list, idx) => {
    if (!list) {
        return undefined;
    }
    else if (idx === 0) {
        return list.value;
    }
    else {
        return nth(list.rest, idx - 1);
    }
};


console.log(arrayToList(array));
console.log(listToArray(arrayToList(array)));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursion(arrayToList([10, 20, 30]), 1));

