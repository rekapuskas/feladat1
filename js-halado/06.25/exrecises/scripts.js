const students = [
  { name: "Bill", age: 17, grade: 5 },
  { name: "Jane", age: 17, grade: 4 },
  { name: "Martha", age: 18, grade: 3 },
  { name: "Bob", age: 17, grade: 5 },
  { name: "John", age: 19, grade: 2 },
  { name: "Jane", age: 17, grade: 4 },
  { name: "Jill", age: 19, grade: 5 },
];

//1. feladat
const eminent = students.filter((num) => num.grade == 5);

console.log(eminent);

//2. feladat
const valedoctorian = students.map((num) => {
  if (num.grade == 5) {
    num.isvaledoctorian = true;
  } else {
    num.isvaledoctorian = false;
  }
  return num;
});
console.log(valedoctorian);

//3. feladat
let above18 = students
  .filter((num) => num.age >= 18)
  .reduce((avg, num) => {
    avg = avg + num.grade;
    return avg;
  }, 0);

console.log(above18 / 3);

//4. feladat
const removeDuplicate = students.map(() => {

})

//5.feladat
const under18 = students.filter((student) => student.age < 18).some((student) => student.grade < 4);
console.log(under18);

//6.feladat

//
const arr = [1,2,3,4,5];
const arr2  = [...arr];
console.log(arr2);




