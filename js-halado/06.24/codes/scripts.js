const numbers = [10, 8.7, 11, 104, 7.7, 10, 43.1, 88.8];
console.log(numbers);
//1. feladat
const doubleNumbers = numbers.map((item) => {
  return item * 2;
});

console.log(doubleNumbers);

//2. feladat
const wholeNumber = numbers.filter((number) => {
  return number % 1 == 0;
});
console.log(wholeNumber);

//3. feladat
const find53 = numbers.find((number) => {
  return number % 52 == 0;
});
console.log(find53);

//4. feladat
const sum = numbers.reduce((sum, number) => {
  return sum + number;
});
console.log(sum);

//5. feladat

const largestNumber = numbers.reduce((max, number) => {
  if (number > max) {
    return number;
  }
  return max;
});
console.log(largestNumber);

//6. feladat

const smallesNumber = numbers.reduce((min, number) => {
  if (number < min) {
    return number;
  }
  return min;
});
console.log(smallesNumber);
