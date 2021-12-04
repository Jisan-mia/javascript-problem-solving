// sum all the number of an array

/*const jisanMarks = [85, 72, 90, 80, 88];
let sum = 0;

for (let i = 0; i < jisanMarks.length; i++) {
    let element = jisanMarks[i];
    sum = sum + element;
}
console.log(sum);*/

//function
function arraySum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum = sum + element;
    }
    return sum;
}

const numbers = [85, 78, 90, 80, 88];
console.log(arraySum(numbers));

const total = numbers.reduce((acc, currentValue) => acc + currentValue , 0)
