function checkWord(space, word) {
    if (space.length !== word.length) {
        return false;
    }
    for (let i = 0; i < space.length; i++) {
        if (space[i] !== '-' && space[i] !== word[i]) {

            return false
        }
    }
    return true;
}

let space = '----t';
let word = 'easet';
console.log(space, '\n', word);
console.log(checkWord(space, word));
