// Create a sleep function that takes one parameter (time) and
// will wait "time" ms
/*
    async function run() {
        await sleep(500);
        console.log('hello');
        await sleep(500);
        console.log('world');
    }
*/
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolved after ${time}ms`);
    }, time);
  });
}

async function run() {
  console.log("start");
  await sleep(500);
  console.log("hello");
  await sleep(1000);
  console.log("world");
}
console.log("outside");

run();
