const button = document.getElementById("counter-button");
const sectionEven = document.getElementById("evenSection");
const sectionOdd = document.getElementById("oddSection");
const sectionBy3 = document.getElementById("divBy3Section");
const sectionBy5 = document.getElementById("divBy5Section");
const sectionBy15 = document.getElementById("divBy15Section");
let count = 0;

const newNumberBlock = function (count) {
  let newNumberBlock = document.createElement("div");
  newNumberBlock.classList.add("js-numberBlock");
  newNumberBlock.innerHTML = count;

  newNumberBlock.addEventListener("click", () => {
    newNumberBlock.remove();
  });

  return newNumberBlock;
};

function updateButton() {
  button.innerHTML = count;

  if (count % 15 === 0) {
    sectionBy15.appendChild(newNumberBlock(count));
    sectionBy15.scrollLeft = sectionBy15.scrollWidth;
  } else if (count % 5 === 0) {
    sectionBy5.appendChild(newNumberBlock(count));
    sectionBy5.scrollLeft = sectionBy5.scrollWidth;
  } else if (count % 3 === 0) {
    sectionBy3.appendChild(newNumberBlock(count));
    sectionBy3.scrollLeft = sectionBy3.scrollWidth;
  } else if (count % 2 === 0) {
    sectionEven.appendChild(newNumberBlock(count));
    sectionEven.scrollLeft = sectionEven.scrollWidth;
  } else {
    sectionOdd.appendChild(newNumberBlock(count));
    sectionOdd.scrollLeft = sectionEven.scrollWidth;
  }
}
function clickButton() {
  count++;
  updateButton();
}

button.addEventListener("click", clickButton);
