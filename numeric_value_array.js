function array_filled(size, content) {

    let arr = [];
    arr.length = size;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = content;
    }

    return arr;
}

console.log(array_filled(6, 0));    // [0, 0, 0, 0, 0, 0]
console.log(array_filled(3, 5));    // [5, 5, 5]
console.log(array_filled(4, 11));   // [11, 11, 11, 11]