// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function reversePath(element, root2, root1) {
  const path = [];
  let current = element;
  while (current !== root1) {
    const index = [...current.parentNode.children].indexOf(current);
    path.push(index);

    current = current.parentNode;
  }

  current = root2;
  console.log(path);
  while (path.length) {
    current = current.children[path.pop()];
    if (!current) {
      return null;
    }
  }
  return current;
}

const root1 = document.querySelector("#root1");
const root1Element = document.querySelector("#root1Element");
const root2 = document.querySelector("#root2");

console.log(reversePath(root1Element, root2, root1));
