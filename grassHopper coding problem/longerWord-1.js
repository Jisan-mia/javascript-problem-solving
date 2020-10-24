function longerWord(string1, string2) {
    if (string1.length > string2.length) {
        return string1;
    } else if (string1.length == string2.length) {
        return 'Same length'
    }
    return string2;
}
let longer = longerWord('Jisan Mia', 'Porag')
console.log(longer)
