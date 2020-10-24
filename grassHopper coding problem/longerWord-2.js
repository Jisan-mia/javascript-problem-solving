function longerWord(stringArr) {
    let longWord = stringArr[0];
    for (let i = 0; i < stringArr.length; i++) {
        let element = stringArr[i];
        if (element.length > longWord.length) {
            longWord = element;
        }
    }
    return longWord;
}
let wordArr = ['hi', 'hello', 'book', 'subject', 'fan'];
let result = longerWord(wordArr);
console.log(result)
