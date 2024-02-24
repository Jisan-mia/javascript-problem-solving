const rootElement = document.getElementById("fruites");

const foodData = [
  {
    id: 1,
    name: "apple",
  },
  {
    id: 2,
    name: "banana",
  },
  {
    id: 3,
    name: "orage",
  },
];

class Food {
  constructor(element, data) {
    this.element = element;
    this.data = data;
  }

  render() {
    this.element.addEventListener("click", function (event) {
      const { target } = event;
      target.remove();
    });
    const fragment = document.createDocumentFragment();
    this.data.map(function (dataItem) {
      const pElement = document.createElement("p");
      pElement.setAttribute("id", `${dataItem.id}`);
      pElement.innerText = dataItem.name;
      fragment.appendChild(pElement);
    });
    this.element.appendChild(fragment);
  }

  removeFoodItem(id) {
    this.data = this.data.filter((item) => item.id !== id);
    this.render();
  }
}

const favFood = new Food(rootElement, foodData);
favFood.render();
