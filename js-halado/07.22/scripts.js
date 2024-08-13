//1. feladat
/*Írj egy programot, ami egy számot kér be a felhasználótól 
és kiírja azt olyan formában, hogy minden páros számjegy után betesz egy kötőjelet. 
pl.: input: 1233347756 -> output: 12-3334-7756 pl.: input: 2222 -> output: 2-2-2-2*/

function convertNum() {
  let num = prompt("Adj meg egy számot");
  const digits = num.split("");

  const result = digits.map((digit, index) => {
    if (digit % 2 == 0 && index < digits.length - 1) {
      return digit + "-";
    } else {
      return digit;
    }
  });
  console.log(result.join(""));
}
convertNum();

//2. feladat
/*Írj egy függvényt, ami egy számokból álló tömböt kap meg paraméterként 
és visszaadja a számok négyzetösszegét 
(mindegyik számot négyzetre emeli és összeadja azokat)

pl.: input: [2,3,4] -> 4+9+16 -> 29

hint: használj map-et vagy reduce-t*/

function sumOfSquares(arr) {
  let result = arr.reduce(
    (accumolator, number) => number * number + accumolator,
    0
  );
  console.log(result);
}

sumOfSquares([2, 3, 4]);

//3. feladat
/*Írj egy függvényt, ami egy számokból álló tömbböt kap meg paraméterként 
és visszaadja a tömbben található pozitív számok összegét

pl.: input: [1,-1,2] -> 3

hint: használj reduce-t és filtert*/

const sumOfPositives = (arr) =>
  arr
    .filter((number) => number > 0)
    .reduce((accumolator, number) => accumolator + number, 0);

console.log(sumOfPositives([1, -1, 2]));

//4. feladat
/*Írj egy függvényt, ami megkap egy nevet és visszaad egy stringet, 
ami a megadott név kezdőbetűit tartalmazza

pl.: input: Kovács Tivadar Töhötöm -> KTT 
pl.: József Attila -> JA pl.: George R. R. Martin -> GRRM

Bónusz: működjön kötőjeles nevekkel is, pl.: Kollár-Klemencz László -> KKL*/
const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("");

console.log(getInitials("Kovács Tivadar Töhötöm"));

//5. feladat
/*Írj egy olyan függvényt, ami a megadott struktúrájú input alapján 
visszaad egy olyan tömböt, aminek az

első eleme a legfiatalabb ember életkora
a második eleme a legidősebb ember életkora
a harmadik eleme ezen életkorok különbsége*/

const input = [
  {
    name: "Tibi",
    age: 13,
  },
  {
    name: "Feri",
    age: 56,
  },
  {
    name: "Juli",
    age: 45,
  },
  {
    name: "Margit",
    age: 67,
  },
];

function getAgeData(people) {
  const ages = people.map((person) => person.age);
  const youngestAge = Math.min(...ages);
  const oldesttAge = Math.max(...ages);
  console.log([youngestAge, oldesttAge, youngestAge + oldesttAge]);
}

getAgeData(input);

//6. feladat
/*Készíts egy olyan függvényt, ami egy megadott mondatot átír olyan formába, amiben a 4 karakternél hosszabb szavak nincsenek teljesen kiírva, 
csak az első és az utolsó betűjük, a kettő között pedig egy szám van, aminek az értéke a két betű közötti betűk száma.

pl.: localization -> l10n

pl.: accessibility -> a11y

pl.: Ez egy ilyen elkelkáposztásított mondat -> Ez egy i3n e17t m4t*/

const createShortVersion = (word) => {
  if (word.length > 4) {
    return word[0] + (word.length - 2) + word[word.length - 1];
  }
};

const transformSentence = (sentence) => {
  sentence.split(" ").map(createShortVersion).join(" ");
};

console.log(transformSentence("internationalization"));
console.log(transformSentence("Ez egy ilyen elkelkáposztásított mondat"));

//Háti
//Írj egy függvényt, ami egy ilyen megadott adathalmazból visszaadja azokat a tanulókat egy tömbben, akiknek az átlaguk 90 fölötti!
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] },
];
const getAverage = (scores) => {
  const result =
    scores.reduce((accumolator, number) => accumolator + number, 0) /
    scores.length;
    return result;
};

console.log(students.filter((student) => getAverage(student.scores) >= 90));


