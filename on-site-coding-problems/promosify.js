// Create a function to turn any function into a "promisfied" function.
// Any function to be promisified will always have a callback as the last argument.
// The callback will always have this signature:
//   function(result){}

/*
    const exampleFn = function (x, y, callback) {};

    const promisedFn = promisify(exampleFn);

    promisedFn().then(...).then(...)
*/

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function cb(result) {
        resolve(result);
      }
      fn.apply(this, args.concat(cb));
    });
  };
}

function exampleFunc(a, b, callback) {
  console.log({ a, b });
  callback("hello world");
}

const promisifiedFunc = promisify(exampleFunc);
promisifiedFunc(5, 6).then((res) => console.log(res));
