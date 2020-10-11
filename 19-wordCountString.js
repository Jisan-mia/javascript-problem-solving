// count the number of words in a string
function wordCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            count++;
        }
    }
    count++;
    return count;
}

let myString = 'My name is Jisan. I am a programmer'
//console.log(wordCount(myString));


//another small solution
function countWord(str) {
    // split method will spearte all the word by comma and turn the string into an array then we will get the lenght of the array using .lenght;
    return str.split(' ').length;
}
console.log(countWord(myString));




//acurate way
function count_words(str) {
    //exclude start and end white space
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1
    str = str.replace(/[ ]{2,}/gi, " ");
    //exclude newline with a start spacing
    str = str.replace(/\n /, "\n");

    return str.split(' ').length;;
}
myString = "My   name is Jisan."
console.log(count_words(myString));
