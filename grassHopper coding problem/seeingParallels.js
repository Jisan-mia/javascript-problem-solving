function longerArray(array1, array2) {
    if (array1.length > array2.length) {
        return array1;
    } else if (array1.length == array2.length) {
        return 'Equal items';
    }
    return array2;
}
const arr1 = [2, 3, 5, 6, 1, 5];
const arr2 = [5, 21, 53, 12, 5, 6, 7, 2];

const result = longerArray(arr1, arr2);
console.log(result);
