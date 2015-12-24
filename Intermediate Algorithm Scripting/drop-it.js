/*

Bonfire: Drop it

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

*/
function drop(arr, func) {
    while (true) {
        if (0 === arr.length) {
            return arr;
        }

        if (!func(arr[0])) {
            arr.shift();
        } else {
            return arr;
        }
    }
}

// Test Cases

drop([1, 2, 3, 4], function (n) {
    return n >= 3;
});
drop([0, 1, 0, 1], function (n) {
    return n === 1;
});
drop([1, 2, 3], function (n) {
    return n > 0;
});
drop([1, 2, 3, 4], function (n) {
    return n > 5;
});
drop([1, 2, 3, 7, 4], function (n) {
    return n > 3;
});
drop([1, 2, 3, 9, 2], function (n) {
    return n > 2;
});