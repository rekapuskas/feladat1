let number = 0;

const increment = document.getElementById("increment-btn");
console.log(increment);
increment.addEventListener("click", function () {
    number = number + 1;
    document.getElementById("number").innerHTML = number;
  });
const decrement = document.getElementById("decrement-btn");


decrement.addEventListener("click", function () {
  number = number - 1;
  document.getElementById("number").innerHTML = number;
});

