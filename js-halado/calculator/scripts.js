const elements = [
  7,
  8,
  9,
  "törlés",
  4,
  5,
  6,
  "%",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "=",
  "+",
];
let result = document.getElementById("result");
result.textContent = '';
const calculatorContainer = document.getElementById("calculator");

for (let i = 0; i < 16; ++i) {
  let field = document.createElement("button");
  field.textContent = elements[i];
  field.addEventListener('click', (event) => {
    result.textContent += field.textContent;
  })
  calculatorContainer.append(field);
}

const field = document.getElementsByClassName('field');

console.log(result);