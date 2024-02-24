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
