const square = document.getElementById("square");
// Amount of pixels we want our square to animate right
const amountOfPixelsToAnimate = 300;
const duration = 1000;
let left = 0;
let startTime = null;

function animate(timestamp) {
  // The first time we're running rAF, we need to set the anchor point as to which we're going to calculate our duration
  if (!startTime) {
    startTime = timestamp;
  }

  // How long have we been animating in total?
  const runtime = timestamp - startTime;

  // How much has our animation progressed relative to our duration goal?
  // The result is a number (float) between 0 and 1. So 0 is zero percent en 1 is one hundred percent.
  const relativeProgress = runtime / duration;
  // 1. We're calculating a new left position based on the relative progress we've made in time.
  // 2. We're using Math.min to ensure that the progress value will never more be more than 1 (one hundred percent). That way the new animation value will never be more than the distance we want to cover. This is called "clamping".
  left = amountOfPixelsToAnimate * Math.min(relativeProgress, 1);

  // Use translateX to ensure GPU use for animation
  square.style.transform = `translateX(${left}px)`;

  // We want to request another frame when our desired duration isn't met yet
  if (runtime < duration) {
    window.requestAnimationFrame(animate);
  }
}

window.requestAnimationFrame(animate);
