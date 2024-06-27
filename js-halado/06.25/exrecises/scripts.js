const students = [
  { name: "Bill", age: 17, grade: 5 },
  { name: "Jane", age: 17, grade: 4 },
  { name: "Martha", age: 18, grade: 3 },
  { name: "Bob", age: 17, grade: 5 },
  { name: "John", age: 19, grade: 2 },
  { name: "Jane", age: 17, grade: 4 },
  { name: "Jill", age: 19, grade: 5 },
];
console.log(students);

//1. feladat
/*Válogasd le egy tömbbe azon diákokat, akik 5-ös osztályzatot kaptak! */
const gotFive = students.filter((student) => student.grade >= 5);
console.log(gotFive);

//2.feladat
/*Hozz létre egy olyan tömböt, ahol ugyan ezen adatok szerepelnek, de hozzákerül az egyes objektumokhoz még egy isValedictorian mező is, amely egy boolean értéket tartalmaz arról, 
hogy az adott tanuló kitűnő-e vagy sem! (az 5-ös osztályzattal értékelt tanulók számítanak kitűnőnek)*/
const extendedStudents = students.map((student) => ({
  ...student,
  isValedictorian: student.grade === 5,
}));
console.log(extendedStudents);
//3.feladat
/*A következő feladatot kettő vagy több tömbfüggvény összeláncolásával fogod tudni megoldani: Számold ki a felnőtt (18 éves vagy a feletti) tanulók osztályzatainak átlagát!*/
const sumOfGradesAbove18 = students
  .filter((student) => student.age >= 18)
  .reduce((avg, student) => avg + student.grade, 0);
  console.log(sumOfGradesAbove18);

//4.feladat
/*Az adatgyűjtés során történt egy kis hiba: a Jane nevű tanuló kétszer került bele az adatbázisba. Készíts egy olyan tömböt, amiben nem szerepel egyetlen diák sem 1-nél többször!*/

//5.feladat
/*Válaszolj az alábbi kérdésre egy boolean segítségével: Van 4-esnél rosszabb jegye a 18 év alatti tanulóknak? (true - van, false - nincs)*/
const hasStudentsUnder18HasWeakerGradeThan4 = students.filter((student) => student.age < 18).some((student) => student.grade < 4);
console.log(hasStudentsUnder18HasWeakerGradeThan4);

//6.feladat
/*Készíts egy tömböt, amiben csak a diákok nevei szerepelnek! Használd azt a tömbödet amiből már kivetted az ismétlődő diákokat! */
const onlyNames = students.map((student) => student.name);
console.log(onlyNames);
