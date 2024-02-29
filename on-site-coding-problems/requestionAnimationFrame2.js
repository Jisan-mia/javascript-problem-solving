// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.

/*
    function moveElement(duration, distance, element) {}
*/
function moveElement(duration, distance, element) {
  const startTime = performance.now();
  function move(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = elapsed / duration;
    const amountToMove = progress * distance;
    console.log({ elapsed, progress, amountToMove });

    element.style.transform = `translateX(${amountToMove}px)`;
    if (amountToMove < distance) {
      window.requestAnimationFrame(move);
    }
  }

  window.requestAnimationFrame(move);
}
const circle = document.getElementById("circle");
moveElement(1000, 300, circle);
