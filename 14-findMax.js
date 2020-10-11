//find a max number of some positive integer number
//a simple way and interesting too

function maxNum(num1, num2, num3) {
    let max = 0;
    if (num1 > num2) {
        if (num1 > num3) {
            max = num1;
        } else {
            max = num3;
        }
    } else {
        if (num2 > num3) {
            max = num2;
        } else {
            max = num3;
        }
    }
    return max;
}
const x = 15,
    y = 9,
    z = 8;
//console.log(maxNum(x, y, z));


//another solution
function max3Num(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
//console.log(max3Num(40, 50, 60));


//using math object
const maxNumber = Math.max(5, 34, 30);
console.log(maxNumber)
