//reverse string with increement for loop
function reverseString(str) {
    let reverse = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let myString = 'Reverse this string';
//console.log(reverseString(myString));


//reverse string with a decrementing for loop
function reverseString1(str) {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        reverse = reverse + char;
    }
    return reverse;
}

myString = 'Reverse';
//console.log(reverseString1(myString));


//using array
function reverseString2(str) {
    if (!str || str.length < 2 || typeof str != 'string') {
        return "Not Valid"
    }

    const revArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join('');
}
myString = 'Programmer';
console.log(reverseString2(myString))





//reverse a string using built-in function
function stringReverse(str) {
    //use the split() mehtod to return a new array
    let splitString = str.split("");

    //use the reverse() mehod to  revere the new creted array;
    let reverseArray = splitString.reverse();

    //use the join() mehod to join all elements of the array into string
    let joinArray = reverseArray.join("");
    return joinArray;

    // we can do everything above in one line
    // return str.split("").reverse().join("");
}
console.log(stringReverse(myString));
