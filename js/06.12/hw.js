//3. feladat
/*Készíts egy függvényt, amely egy szövegben lévő szavak gyakoriságát számolja, és visszaadja egy tömbben, ahol minden elem egy objektum a szóval és a gyakorisággal. 
Mindegy, hogy egy szó kis- vagy nagybetűvel kezdődik, a kettő ugyanannak a szónak számít. */


//4. feladat
/* Készíts egy függvényt, amely véletlenszerűen kiválaszt egy egész számot 1 és 100 között, és a felhasználónak addig kell találgatnia, amíg el nem találja a számot. 
A program ad visszajelzést, hogy a találgatott szám nagyobb vagy kisebb, mint a véletlenszerű szám. A random szám generálásához használd a Math.random() metódust!*/

//5. feladat
/*Készíts egy függvényt, amely diákok nevét és jegyeit tartalmazza, és kategorizálja őket (pl. "kiváló", "jó", "közepes", "elégséges", "elégtelen") az átlagjuk alapján. 
Minden diáknak több jegye van.

A kategóriák a következők:

kiváló: 4.5 vagy jobb
jó: 4.0 vagy jobb
közepes: 3.0 vagy jobb
elégséges: 2.0 vagy jobb
elégtelen: 2.0 alatt */

const students = [
  { name: "Mézga Aladár", grades: [5, 4, 3, 5, 5, 2] },
  { name: "MZ/X", grades: [5, 5, 5, 5, 5, 5] },
  { name: "Boborján", grades: [2, 1, 4, 3, 2, 1] },
];

function getGradeCategory(grade){
  if(grade >= 4,5){
    return "kiváló";
  } else if(grade >= 4,0){
    return "jó";
  } else if(grade >= 3,0){
    return "közepes";
  } else if(grade >= 2){
    return "elégséges";
  } else {
    return "elégtelen";
  }
}

const GRADE_CATEGORIES = ["kiváló", "jó", "közepes", "elégséges", "elégtelen"];

function categorizeStudents(students){
  let categories = {};
  for(let i = 0; i < GRADE_CATEGORIES.length; ++i){
    categories[GRADE_CATEGORIES[i]] = [];
  }
  for (let i = 0; i < students.length; i++) {
    const average = calculateAverage(students[i].grades);

    categories[getGradeCategory(average)].push(students[i]);
}

return categories;
};
console.log(categorizeStudents(students));