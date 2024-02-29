// Write a function that returns the value at a give path
/*
    let testObj = {
        foo: 2,
        bar: 'car',
        baz: {x: 'xx', y: 'yy', biz: {a: 56}}
    };

    getByPath(['baz', 'biz', 'a'], testObj); //56
 */

function getByPath([first, ...rest], obj) {
  if (!first || !obj[first]) {
    // either no path was supplied or the top level property doesn't exist in obj
    return undefined;
  }

  if (rest.length < 1) {
    return obj[first];
  } else {
    return getByPath(rest, obj[first]);
  }
}

let testObj = {
  foo: 2,
  bar: "car",
  baz: { x: "xx", y: "yy", biz: { a: 56 } },
};
console.log(getByPath(["baz", "biz", "a"], testObj)); //56
