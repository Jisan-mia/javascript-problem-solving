// find the lagest number of an array


function largesNumOfArr(array) {
    let largestNum = array[0];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element > largestNum) {
            largestNum = element;
        }
    }
    return largestNum;
}
const marks = [25, 89, 53, 65];

console.log(largesNumOfArr(marks));
