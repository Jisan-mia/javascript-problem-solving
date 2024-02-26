// implement debounce
const searchElement = document.getElementById('search');
function debounce(fn, timer) {
  let timeoutId;
  return function(){
    if(timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, arguments)
      timeoutId = null
    }, timer)
  }
}

function search(value) {
  console.log(value)
}

const debouncedSearch = debounce(search, 1000)
searchElement.addEventListener('keyup', function(e) {
  debouncedSearch(e.target.value)
})