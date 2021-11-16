//remove any duplicate number from an array

/*
const ticket = [1, 2, 3, 4, 5, 2, 6, 7, 7, 9, 4, 10, 2];

const uniqueArr = [];
for (let i = 0; i < ticket.length; i++) {
    let element = ticket[i];
    let index = uniqueArr.indexOf(element)
    if (index == -1) {
        uniqueArr.push(element);
    }
}
console.log(newArr);
*/

//function of unique array
function uniqueArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        let index = newArray.indexOf(element);
        if (index == -1) {
            newArray.push(element);
        }
    }
    return newArray;
}
const ticket = [1, 2, 3, 3, 4, 5, 2, 6, 7, 7, 9, 4, 10, 2];

const result = uniqueArray(ticket);
console.log(result);

// an easy way susing set
const uniqueArr2 = [...new Set(ticket)]
