//The longest word of an array of strings
function longestWord(stringArr) {
    let longstWord = '';
    for (let i = 0; i < stringArr.length; i++) {
        let word = stringArr[i];
        if (word.length > longstWord.length) {
            longstWord = word;
        }
    }
    return longstWord;
}
let stringArray = ['jisan', 'porag', 'mursaline', 'sakil', 'asad'];
//console.log(longestWord(stringArray));

//making a map

function mapString(string) {
    let map = {};

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        if (map[letter]) {
            map[letter].push(i);
        } else {
            map[letter] = [i];
        }
    }
    return map;
}

let string = "abpppale"
let stringMap = mapString(string);
//console.log(stringMap);
for (let letter in stringMap) {
    console.log(letter + ': ' + stringMap[letter]);
}

//comparing letters
function compareLetters(string, object) {

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (object[letter]) {

        } else {
            return false;
        }
    }
    return true;
}

let compareString = 'apple';
console.log(compareString);
let letterCompare = compareLetters(compareString, stringMap);

console.log(letterCompare)
