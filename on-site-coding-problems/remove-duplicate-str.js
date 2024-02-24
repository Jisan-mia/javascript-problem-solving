function removeDuplicate(str) {
  const wordArr = str.split(" ");
  const newArr = [];

  for (let i = 0; i < wordArr.length; i++) {
    const currentItem = wordArr[i];
    if (newArr.indexOf(currentItem) === -1) {
      newArr.push(currentItem);
    }
  }

  return newArr.join(" ");
}

const str = "This is is a test test input";
console.log(removeDuplicate(str));

function removeDuplicate2(str) {
  return str
    .split(" ")
    .reduce(
      (acc, currentVal) =>
        acc.indexOf(currentVal) == -1 ? [...acc, currentVal] : acc,
      []
    )
    .join(" ");
}

console.log(removeDuplicate2(str));


function removeDuplicate3(str) {
  const wordArr = str.split(" ");
  const set = new Set(wordArr);
  const newString = [...set].join(" ");
  return newString;
}

console.log(removeDuplicate3(str));