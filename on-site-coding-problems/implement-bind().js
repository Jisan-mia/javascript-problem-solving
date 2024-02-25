// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }

    let baz = foo.bind({bar: 'hello'})

    baz(); // Hello
*/

Function.prototype.bind = function (context, ...args) {
  const fn = this;
  return function (...rest) {
    fn.apply(context, [...args, ...rest]);
  };
};

function foo(a, b) {
  console.log(this.bar, a, b);
}

let baz = foo.bind({ bar: "hello" }, 5);
baz(10); // "hello" 5 10