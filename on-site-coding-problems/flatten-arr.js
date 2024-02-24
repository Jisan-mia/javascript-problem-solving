// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

function flatten(arr) {
  const flattenedArr = []
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i]
    console.log(element)
    if(Array.isArray(element)) {
      flattenedArr.push(...flatten(element))
    } else {
      flattenedArr.push(element)
    }
  }
  return flattenedArr;
}

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
console.log(flatten(exampleArray)); // [1,2,3,4,5,6,7,8,9,10]


function flatten2(arr) {
  return arr.reduce((acc, currentElement) => acc.concat(Array.isArray(currentElement) ? flatten2(currentElement) : currentElement), [])
}
console.log(flatten2(exampleArray));