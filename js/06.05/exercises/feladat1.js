//1. feladat
function square(num) {
  return num * num;
}
let num = prompt("Adj meg egy számot");
alert(square(num));

//2.feladat
function bigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
let num1 = prompt("Adj meg egy számot!");
let num2 = prompt("Adj meg egy másikat!");
let big = bigger(num1, num2);

alert(`A nagyobbik szám: ${bigger(num1, num2)}`);

//3.feladat
function numbersInArray(array) {
  for (let i = 0; i < array.length; ++i) {
    alert(array[i]);
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
numbersInArray(array);
