//find the smallest number of an array
function smallestNumOfArr(array) {
    let smallestNum = array[0];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element < smallestNum) {
            smallestNum = element;
        }
    }
    return smallestNum;
}
const marks = [25, 89, 15, 65];

console.log(smallestNumOfArr(marks));
